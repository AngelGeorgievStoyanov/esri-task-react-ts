import { BaseSyntheticEvent, FC } from "react";
import * as arcgisService from '../services/arcgisService'
import './FindAddress.css'



const FindAddress: FC = () => {

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
        }
    }


    const onHandleChange = async (e: BaseSyntheticEvent) => {

        const address = e.target as HTMLInputElement

        console.log(address.value)

        await arcgisService.findSuggestAdress(address.value).then((data) => {

            console.log(data)

        }).catch((err) => {
            console.log(err)
        })

    }
    return (
        <main>

            <form onSubmit={onHandleSubmit} className='form-search-address'>
                <h3>Търсене на адрес</h3>
                <input type='text' name='address' onChange={onHandleChange} />
                <input type="submit" value='Намери' />
            </form>
        </main>
    )
}

export default FindAddress;