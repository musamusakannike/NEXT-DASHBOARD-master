// interface TransactionStatus {

// }

export interface Transaction {
  id: number
  name: string
  status: "success" | "pending" | "failed" | "cancelled";
  amount: number;
  date: string;
  description?: string;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 2,
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 3,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 4,
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 5,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 6,
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 7,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 8,
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 9,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 10,
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 11,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 12,
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 13,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 14,
    name: "Buy of cement",
    status: "pending",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 15,
    name: "Buy of cement",
    status: "success",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
  {
    id: 16,
    name: "Buy of cement",
    status: "failed",
    amount: 210,
    date: "10-11-2002",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni nobis error, quo dolorem impedit maxime, laborum quos animi dicta cum eum cumque assumenda? A sunt nihil eveniet deleniti quia?"
  },
]