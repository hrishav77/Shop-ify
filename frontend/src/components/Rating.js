import { Tooltip} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons'


export default function Rating(props) {
  return (

    <Tooltip hasArrow label={props.rating.rate} openDelay="100">
    <Box display="flex" flexDirection="row" alignItems="center">
          {Array.from({ length: Math.round(props.rating.rate) }, (_, index) => (//Array.from(iterable, mapFunction);
            <StarIcon key={index} color="goldenrod" boxSize="20px" />
          ))}
    {props.rating.count}
    </Box>
    </Tooltip>
  )
}
