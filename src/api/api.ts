import {instance} from "../common/constants/constants";

export const callsAPI = {
  getList(payload: SearchParamsType) {
    return instance.post<ResponseType>(`getList?date_start=${payload.date_start}&date_end=${payload.date_end}&in_out=${payload.in_out}`)
      .then((res) => res.data)
  },
  getRecord(record: string, partnershipId: string){
    return instance.post(`getRecord?partnership_id=${partnershipId}&record=${record}`)
      .then((res) => res.data)
  }}

type ResponseType = {
  "total_rows": string,
    "results": [
    {
      "id": number,
      "partnership_id": string,
      "partner_data": {
        "id": string,
        "name": string,
        "phone": string
      },
      "date": string,
      "date_notime": string,
      "time": number,
      "from_number": string,
      "from_extension": string,
      "to_number": string,
      "to_extension": string,
      "is_skilla": number,
      "status": string,
      "record": string,
      "line_number": string,
      "in_out": number,
      "from_site": number,
      "source": string,
      "errors": any[],
      "disconnect_reason": string,
      "results": any[],
      "stages": any[],
      "abuse": {
        "date": string,
        "person_name": string,
        "message": string,
        "support_read_status": number,
        "support_answer_status": number,
        "answers": [
          {
            "message": string,
            "from_support": number,
            "support_read_status": number,
            "person_read_status": number
          }
        ]
      },
      "contact_name": string,
      "contact_company": string,
      "person_id": number,
      "person_name": string,
      "person_surname": string,
      "person_avatar": string
    },
  ]
}

export type SearchParamsType = {
  date_start: string
  date_end: string
  in_out: null | number
}



