import Student from '../Components/Student'

const DisplayProp = () => {
    return (  
        <header>
            <h1>
              <Student name="Spongebob" age={30} isStudent={true}/>

            </h1>
        </header>
    );
}
 
export default DisplayProp;