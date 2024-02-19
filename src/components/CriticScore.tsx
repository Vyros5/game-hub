import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="16px" paddingX={3} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
