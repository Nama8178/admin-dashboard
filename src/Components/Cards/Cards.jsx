import React from 'react'
import "./Cards.css"
import { cardsData } from '../../Data/data'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <>
        <div className="Cards">
            {cardsData.map((cards,id)=>{
                return(
                    <div className="parentContainer">
                        <Card
                        title = {cards.title}
                        color = {cards.color}
                        barValue = {cards.barValue}
                        value = {cards.value}
                        png = {cards.png}
                        series = {cards.series}/>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Cards