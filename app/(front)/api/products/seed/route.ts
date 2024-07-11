import { NextRequest, NextResponse } from "next/server";
import data from '../../../../../lib/data'
import dbConnect from '../../../../../lib/dbConnect'
import UserModel from '../../../../../lib/models/UserModel'
import ProductrModel from '../../../../../lib/models/ProductModel'

export const GET = async (request: NextRequest) => {
    const { users, products } = data
    await dbConnect()

    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductrModel.deleteMany()
    await ProductrModel.insertMany(products)

    return NextResponse.json({
        message: 'Data seeded successfully',
        users,
        products,
    })
}