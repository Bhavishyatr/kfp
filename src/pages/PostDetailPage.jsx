import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader, ErrorMessage, BackButton } from '../components/ui/index.js';
import { usePost, useComments, useRandomImage } from '../hooks/index.js';
import { useNavigation } from '../utils/navigation.js';

const PostDetailPage = () => {
    const { postId } = useParams();
    const { goBack, goToAuthorPosts } = useNavigation();

    const { data: post, loading: postLoading, error: postError } = usePost(postId);
    const { data: comments, loading: commentsLoading, error: commentsError } = useComments(postId);
    const { data: randomImage } = useRandomImage();

    const loading = postLoading || commentsLoading;
    const error = postError || commentsError;

    if (loading) {
        return <Loader message="Loading post..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                error={error}
                onGoBack={goBack}
            />
        );
    }

    if (!post) {
        return (
            <ErrorMessage
                error={{ message: 'Post not found' }}
                onGoBack={goBack}
            />
        );
    }

    const handleAuthorClick = () => {
        goToAuthorPosts(post.userId);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex items-center mb-6">
                <BackButton onClick={goBack} className="mr-2" />
                <h1 className="text-2xl font-semibold">Post Detail</h1>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="mb-8">
                    {randomImage && (
                        <div className="mb-4 text-center">
                            <img
                                src={randomImage.message}
                                alt="Random dog"
                                className="max-w-full h-auto rounded mx-auto"
                            />
                        </div>
                    )}
                    <div>
                        <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                        <p className="text-base text-gray-700 mb-4">{post.body}</p>
                        <div className="pt-4 border-t">
                            <div
                                className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded"
                                onClick={handleAuthorClick}
                            >
                                <span className="text-gray-600 text-sm">Author ID: {post.userId}</span>
                                <span className="text-indigo-600 text-xs font-medium">View more posts by this author →</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Comments ({comments?.length || 0})</h3>
                    <div className="space-y-2">
                        {comments?.map((comment) => (
                            <div key={comment.id} className="bg-gray-50 p-3 rounded">
                                <div className="flex justify-between items-center mb-1">
                                    <strong className="text-gray-800 text-sm">{comment.name}</strong>
                                    <span className="text-gray-500 text-xs">{comment.email}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{comment.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailPage;
