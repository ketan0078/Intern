import React from 'react'
import {Card} from 'react-bootstrap'

const Images=(props)=>{
return <Card className='my-3 p-3 rounded'>
<Card.Img src={props.image}></Card.Img>
</Card>


}

export default Images