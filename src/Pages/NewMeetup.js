import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../Components/meetups/NewMeetForm';

function NewMeetup(){
    const navigate=useNavigate();
    function addMeetupHandler(meetupData){
        console.log('addMeetupHandler')
        fetch(
            'https://react-getting-started-3476f-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            },
        }
        ).then(()=> {
            navigate.splice('/');
        }) 
    }
    return( 
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
    
}

export default NewMeetup;