import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface RatingProps
{
    rating: number;
    numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps)
{
    return (
        <Box d="flex" alignItems="center">
            {Array(5)
                .fill("")
                .map((_, i) =>
                {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1)
                    {
                        return (
                            <StarIcon
                                key={i}
                                style={{ marginLeft: "1" }}
                                color={i < rating ? "teal.500" : "gray.300"}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5)
                    {
                        return <StarIcon key={i} style={{ marginLeft: "1" }}/>;
                    }
                    return <StarIcon key={i} style={{ marginLeft: "1" }}/>;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && "s"}
            </Box>
        </Box>
    );
}