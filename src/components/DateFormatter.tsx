import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const DateFormatter = ({ dateString }: { dateString: string }) => {
   const date = parseISO(dateString)
   return (
      <time dateTime={dateString}>
         {format(date, 'd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
      </time>
   )
}

export default DateFormatter
