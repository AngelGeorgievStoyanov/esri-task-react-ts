import { BaseSyntheticEvent, FC, ReactElement } from "react";
import './FindAddress.css';

interface FindAddressProps {

    onHandleSubmit: (e: BaseSyntheticEvent) => Promise<void>,
    onHandleChange: (e: BaseSyntheticEvent) => Promise<void>,
    findAddresses: string[] | undefined,
    handleClickSuggestion: any

}

const FindAddress: FC<FindAddressProps> = ({ onHandleSubmit, onHandleChange, findAddresses, handleClickSuggestion }): ReactElement => {


  
    return (

        <form onSubmit={onHandleSubmit} className='form-search-address'>
            <div className='form-div'>
                <h3>Търсене на адрес</h3>
                <input type='text' name='address' onChange={onHandleChange} />
                <input type="submit" className='form-inp-submit' value='Намери на картата' />
            </div>

            {(findAddresses !== undefined) ? findAddresses.map((x: any) => <li className='form-li-suggestion' key={x.text} onClick={handleClickSuggestion}>{x.text}</li>) : ''}

        </form>
    )
}

export default FindAddress;