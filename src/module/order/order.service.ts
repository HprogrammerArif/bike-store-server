import { IOrder } from "./order.interface";
import Order from "./order.model";

const orderBike = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};

const calculateRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $lookup: {
        from: "products", // The collection name of your Product model
        localField: "product",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails",
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ["$quantity", "$productDetails.price"] },
        },
      },
    },
  ]);

  const totalRevenue = revenue.length ? revenue[0].totalRevenue : 0;
  return totalRevenue;
};

export const orderService = {
  orderBike,
  calculateRevenue,
};
