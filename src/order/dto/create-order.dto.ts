import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    productName: string
    @IsNotEmpty()
    productQuantity: number
    @IsNotEmpty()
    amount: number
    @IsNotEmpty()
    address: string
    @IsNotEmpty()
    userId: string
}
