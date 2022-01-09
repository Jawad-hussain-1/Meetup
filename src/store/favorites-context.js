import { createContext, useState } from "react";

const  FavoritesContext=createContext({
   favorites:[],
   totalFavorites:0,
   addFavorite:(favoriteMeetup)=>{},
   removeFavorite:(meetupId)=>{},
   itemisFavorite:(meetupId)=>{}

});
 export function FavoritesContextProvider(props){
    const [userFavorites,setuserFavorites]=useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setuserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);

        });
    }
    function removeFavoriteHandler(meetupId){
     setuserFavorites((prevUserFavorites)=>{
    return prevUserFavorites.filter(meetup=>meetup.id !==meetupId);

     });
    }
    function itemisFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id ===meetupId) 
    }
    const Context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemisFavorite:itemisFavoriteHandler
    };
    return(<FavoritesContext.Provider value={Context}>
{props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;