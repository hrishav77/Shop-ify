import { Tooltip} from "@chakra-ui/react";
import { Box,useMediaQuery ,Text} from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons'


export default function Rating(props) {
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  return (

    <Tooltip hasArrow label={props.rating.rate} openDelay="100">
    <Box display="flex" flexDirection="row" alignItems="center" color="goldenrod" fontSize={isSmallScreen?"xs":"lg"}>
          {Array.from({ length: Math.round(props.rating.rate) }, (_, index) => (//Array.from(iterable, mapFunction);
            <StarIcon key={index} color="goldenrod" boxSize={isSmallScreen?"7px":"20px"} />
          ))}
          
    <Text fontSize={isSmallScreen?"3xs":"md"}>{props.rating.count}</Text>
    </Box>
    </Tooltip>
  )
}
