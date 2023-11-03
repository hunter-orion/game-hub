import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 74 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="13px"
      paddingX="8px"
      borderRadius="4.4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
