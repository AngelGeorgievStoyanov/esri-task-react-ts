import { FC } from "react";
import './FindAddress.css'



const FindAddress: FC = () => {
    return (
        <main>

            <form className='form-search-address'>
                <h3>Търсене на адрес</h3>
                <input type='text' name='address' />
                <input type="submit" value='Намери' />
            </form>
        </main>
    )
}

export default FindAddress;