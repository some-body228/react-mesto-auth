import React from "react";
import CardsContainer from "./CardsContainer.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import Api from "../../utils/Api.js";
const api = Api.api;
function Main(props) {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  console.log(props.email);
  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getName()]).then(
      ([cards, userInfo]) => {
        setCards(cards);
        setCurrentUser({
          name: userInfo.name,
          about: userInfo.about,
          avatar: userInfo.avatar,
          id: userInfo._id,
        });
      }
    );
  }, []);
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser.id);
    if (!isLiked) {
      api.likeCard(card._id).then((newCard) => setNewLikesCallback(newCard));
    } else {
      api.dislikeCard(card._id).then((newCard) => setNewLikesCallback(newCard));
    }
    const setNewLikesCallback = (newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    };
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      const newCards = cards.filter((c) => {
        return card._id !== c._id;
      });
      setCards(newCards);
    });
  }
  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(card) {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
  }
  function closeAllPopups() {
    setProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard({});
  }
  function handleUpdateUser(data) {
    api.patchName(data).then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        id: res._id,
      });
      closeAllPopups();
    });
  }
  function handleUpdateAvatar(data) {
    api.patchAvatar(data).then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        id: res._id,
      });
      closeAllPopups();
    });
  }
  function handleAddPlaceSubmit(data) {
    api.postCard(data).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <props.Header
        renderedElement={
          <>
            <p className="header__caption header__caption_type_email">
              {props.email}
            </p>
            <a
              className="header__caption header__caption_type_logout"
              href="/sign-in"
              onClick={props.onLogOut}
            >
              Выйти
            </a>
          </>
        }
      />
      <CardsContainer
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      ></CardsContainer>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <ImagePopup onClose={closeAllPopups} cardImageState={selectedCard} />
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        btnText="да"
        isOpen={false}
        onClose={closeAllPopups}
        children={null}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default Main;
