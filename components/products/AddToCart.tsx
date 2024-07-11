'use client'

import useCartService from "@/lib/hooks/useCardStore"
import { OrderItem } from "@/lib/models/OrderModel"
// import { useRouter } from "next/router"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

export default function AddToCart({ item }: { item: OrderItem }) {
    const router = useRouter()
    const { items, increase, decrease } = useCartService()
    const [ existItem, setExistItem ] = useState<OrderItem | undefined>()

    useEffect(() => {
        setExistItem(items.find((x) => x.slug === item.slug))
    }, [item, items])

    const addToCartHandler = () => {
        increase(item)
    }

  return existItem ? (
    <div className="">
        <button className="btn" type="button" onClick={() => decrease(existItem)}>
            -
        </button>
        <span className="text-lg">{existItem.qty}</span>
        <button className="btn" type="button" onClick={() => increase(existItem)}>
            +
        </button>
    </div>
  ) : (
    <button
        className={'btn btn-primary w-full'}
        type="button"
        onClick={addToCartHandler}
    >
        Add to cart
    </button>
  )
}
