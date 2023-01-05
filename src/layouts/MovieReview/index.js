import NoReviewCard from "components/NoReviewCard";
import ReviewCard from "components/ReviewCard";
import ReviewCardSkeleton from "components/ReviewCardSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MovieReview() {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const movieId = location.state?.id;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP response code ${response.code}`);
                }
                return response.json();
            })
            .then((data) => {
                setReviews(data.results.filter((review, index) => index < 5));
            })
            .catch((error) => {
                setReviews(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId]);

    const data = useMemo(() => reviews, [reviews]);

    return (
        <>
            {loading ? (
                <section className="px-7 mb-16">
                    <div className="mb-6">
                        <div className="mb-6">
                            <TitleSectionSkeleton />
                        </div>
                        <div className="lg:flex lg:justify-between lg:items-stretch lg:flex-wrap lg:gap-2">
                            <ReviewCardSkeleton />
                        </div>
                    </div>
                </section>
            ) : data.length === 0 ? (
                <section className="px-7 mb-16">
                    <div className="mb-6">
                        <div className="mb-6">
                            <TitleSection viewAll={false} title="Ulasan" />
                        </div>
                        <NoReviewCard />
                    </div>
                </section>
            ) : (
                <section className="px-7 mb-16">
                    <div className="mb-6">
                        <div className="mb-6">
                            <TitleSection viewAll={false} title="Ulasan" />
                        </div>
                        <div className="lg:flex lg:justify-between lg:items-stretch lg:flex-wrap lg:gap-2">
                            {data.map((review) => {
                                return (
                                    <ReviewCard
                                        key={review.id}
                                        author={review.author}
                                        content={review.content}
                                        createdAt={review.created_at}
                                        avatar={review.author_details.username}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
