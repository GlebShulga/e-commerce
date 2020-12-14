import React from 'react'

const Card = ({ it, currentRate, currencyType }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <img alt={it.title} className="block object-cover h-64 w-full" src={it.image} />
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <div className="no-underline hover:underline text-black">{it.title}</div>
        </h1>
      </header>
      <div>
        <span className="mx-1">{(it.price * currentRate).toFixed(2)}</span>
        <span>{currencyType}</span>
      </div>
    </article>
  )
}

Card.propTypes = {}

export default Card
