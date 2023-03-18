import type { NextApiRequest, NextApiResponse } from 'next'
import info from "../../mock/baseInfo"

type Data = {
  name: string; 
  position: string; 
  age: number; 
  sex: string; 
  origin: string; 
  politics: string; 
  phone: string; 
  email: string; 
  wechat: string; 
  text: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ...info })
}
