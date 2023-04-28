import { BaseSyntheticEvent, FC, useState } from "react";
import * as arcgisService from '../services/arcgisService'
import './FindAddress.css'



const FindAddress: FC = () => {

    const [findAdrresses, setFindAdrresses] = useState<string[] | undefined>([])

    const onHandleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const address = formData.get('address');

        console.log(address)

        if (address !== null && (typeof address === 'string')) {
            await arcgisService.findAddress(address).then((data) => {

                console.log(data)


            }).catch((err) => {
                console.log(err)
            })
        } else {
            setFindAdrresses(undefined)
        }
    }


    const onHandleChange = async (e: BaseSyntheticEvent) => {

        const address = e.target as HTMLInputElement

        console.log(address.value)

        await arcgisService.findSuggestAdress(address.value).then((data) => {

            console.log(data)
            setFindAdrresses(data.suggestions)

        }).catch((err) => {
            console.log(err)
        })

    }

    const handleClickSuggestion = (e: BaseSyntheticEvent<object, any, any>) => {

        const seggestion = e.target as HTMLLIElement;

        console.log(seggestion.innerText)

    }
    return (
        <main>

            <form onSubmit={onHandleSubmit} className='form-search-address'>
                <div className='form-div'>
                    <h3>Търсене на адрес</h3>
                    <input type='text' name='address' onChange={onHandleChange} />
                    <input type="submit" value='Намери' />
                </div>

                {(findAdrresses !== undefined) ? findAdrresses.map((x: any) => <li className='form-li-suggestion' key={x.text} onClick={handleClickSuggestion}>{x.text}</li>) : ''}

            </form>
        </main>
    )
}

export default FindAddress;