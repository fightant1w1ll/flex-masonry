export const items = [
    {
        content: "A",
        width: 50,
        height: 80,
        // order: 3,
        sizes: "small-100 medium-50 large-33 xlarge-25",
    },
    {
        content: "B",
        width: 60,
        height: 40,
        // order: 2,
        sizes: "small-100 medium-33 large-33 xlarge-25",
    },
    {
        content: "C",
        width: 70,
        height: 160,
        // order: 1,
        sizes: "small-100 medium-50 large-33 xlarge-25",
    },
    {
        content: "D",
        width: 80,
        height: 60,
        sizes: "small-100 medium-33 large-66 xlarge-50",
    },
    {
        content: "E",
        width: 90,
        height: 120,
        sizes: "small-100 medium-66 large-33 xlarge-25",
    },
    {
        content: "F",
        width: 100,
        height: 100,
        sizes: "small-100 medium-33 large-33 xlarge-66",
    },
    {
        content: "G",
        width: 110,
        height: 100,
        sizes: "small-100 medium-50 large-66 xlarge-25",
    },
    {
        content: "H",
        width: 120,
        height: 120,
        sizes: "small-100 medium-50 large-33 xlarge-100",
    },
    {
        content: "I",
        width: 130,
        height: 80,
        sizes: "small-100 medium-50 large-33  xlarge-25",
    },
];

export function getColumnCountFromViewport(viewport) {
    const mapper = {
        small: 1,
        medium: 2,
        large: 3,
        xlarge: 4,
    };
    return mapper[viewport];
}

export function getCurrentSize(sizes, viewport) {
    if (!sizes) return 0;
    return Number(
        sizes
            .split(" ")
            .filter(size => size.indexOf(viewport) > -1)[0]
            .split("-")[1]
    );
}
