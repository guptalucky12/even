import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'TITLE MUST BE AT LEAST 3 CHARACTERS'),
  description: z.string().min(3, 'DESCRIPTION MUST BE AT LEAST 3 CHARACTERS').max(400, 'DESCRIPTION MUST BE LESS THAN 400 CHARACTERS'),
  location: z.string().min(3, 'LOCATION MUST BE AT LEAST 3 CHARACTERS').max(400, 'LOCATION MUST BE LESS THAN 400 CHARACTERS'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})