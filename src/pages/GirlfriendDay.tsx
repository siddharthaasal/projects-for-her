import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function GirlfriendDay() {
    const items = [
        {
            title: "6 years",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/aniv.jpg?updatedAt=1754067653941",
            className: "absolute top-10 left-[20%] rotate-[-5deg]",
        },
        {
            title: "she gets me good coffee",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/baksh.jpg?updatedAt=1754067658727",
            className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
            title: "she takes me shopping",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/vr.jpg?updatedAt=1754067658222",
            className: "absolute top-5 left-[40%] rotate-[8deg]",
        },
        {
            title: "she made me fall in love with mountains",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/jibhi.jpg?updatedAt=1754067657138",
            className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
            title: "late night walks",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/pride-city.jpg?updatedAt=1754067655661",
            className: "absolute top-20 right-[35%] rotate-[2deg]",
        },
        {
            title: "Ricos",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/ricos.jpg?updatedAt=1754067655374",
            className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
            title: "she takes me to expensive places",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/begeterre.jpg?updatedAt=1754067655244",
            className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
        {
            title: "new year - 2025",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/ny25.jpg?updatedAt=1754067655256",
            className: "absolute top-18 left-[30%] rotate-[4deg]",
        },
        {
            title: "took her to see monterverse, lol",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/movie.jpg?updatedAt=1754067654597",
            className: "absolute top-28 left-[25%] rotate-[4deg]",
        },
        {
            title: "she's just so mesmerizing",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/coffee.jpg?updatedAt=1754067653853",
            className: "absolute top-11 left-[35%] rotate-[4deg]",
        },
        {
            title: "late night scooty rides with her",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/scooty.jpg?updatedAt=1754067653763",
            className: "absolute top-45 left-[40%] rotate-[4deg]",
        },
        {
            title: "she taking me to my first proper cafe",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/wongdhen.jpg?updatedAt=1754067653795",
            className: "absolute top-30 left-[40%] rotate-[4deg]",
        },
        {
            title: "we def need another trip",
            image:
                "https://ik.imagekit.io/siddharthaasal/images/kasol.jpg?updatedAt=1754067653262",
            className: "absolute top-29 left-[30%] rotate-[4deg]",
        },

    ];
    return (
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
            <p className="tracking-wider absolute top-1/2 font-love-light mx-auto max-w-4xl -translate-y-3/4 text-center text-2xl font-medium text-neutral-400 md:text-4xl dark:text-neutral-800">
                Were i to write a thousand sonnets, none could match the poetry of your smile.
                Thou art my sun when skies do weep — my ever-sweet midsummer’s dream.
                <br />
                <span className="text-red-500"> Happy Girlfriend Day</span>

            </p>
            {items.map((item) => (
                <DraggableCardBody className={item.className}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                    />
                    <h3 className="mt-4 text-center text-xl font-medium font-serif text-neutral-700 dark:text-neutral-300">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
