import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

function UploadImage({setImage}){

    const createURI = async function (e) {
        const file = e.target.files[0];

        try {
            const added = await client.add(file);
            const URI = `https://ipfs.infura.io/ipfs/${added.path}`;
            console.log(URI)
            setImage(URI);
        } catch (err) {
            console.log(err);
        }
    };

    return <input className="UploadImage" type="file" onChange={createURI} />
}
export default UploadImage;