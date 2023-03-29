import type { NextApiRequest, NextApiResponse } from 'next'
import education from "../../mock/education.json"

type Data = {
  university: { 
    name: string; 
    start: string; 
    end: string; 
    major: string; 
    degree: string; 
    glory: string[]; 
  }[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ...education })
}
