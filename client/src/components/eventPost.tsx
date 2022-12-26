import { useState } from "react"


const Card = (props: any) => {

    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    // const[image, setImage] = useState({})

    // const [body, setBody] = useState<number[]>([])

    // const bodyTypes = {
    //     Text: 0,
    //     BoldText: 1,
    //     Image: 2
    // }

    return(<div>
            <form>
                <div><label>Title:<input type="text" onChange={(e)=>setTitle(e.target.value)} required></input></label></div>
                {/* <div><label>Date:<input type="date" required></input></label></div> */}
                {/* {body.map((number)=>                
                    {switch (number) {
                        case 0:
                            return (<div><label>Body:<textarea></textarea></label></div>)
                        case 1:
                            return (<div><label>Bold Body:<textarea></textarea></label></div>)
                        case 2: 
                            return (<div><label>Image:<input type="file" accept="image/png, image/jpeg"></input></label></div>)
                }})} */}
                <div><label>Image:<input type="file" accept="image/png, image/jpeg"></input></label></div>
                <div><label>Body:<textarea onChange={(e)=>setBody(e.target.value)}></textarea></label></div>
                <button type="submit">Submit</button>
            </form>
            {/* <button onClick={() => setBody([...body, bodyTypes.Text])}>Add text</button>
            <button onClick={() => setBody([...body, bodyTypes.Image])}>Add Image</button>
            <button onClick={() => setBody([...body, bodyTypes.BoldText])}>Add bold text</button>
            <button onClick={()=>setBody([])}>Clear</button> */}
         </div>)
}