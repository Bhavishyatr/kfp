import { useParams } from 'react-router-dom';
import { PostCard, BackButton, Loader, ErrorMessage } from '../components/ui/index.js';
import { usePostsByAuthor } from '../hooks/index.js';
import { useNavigation } from '../utils/navigation.js';
import { UI_CONSTANTS } from '../constants/index.js';

const AuthorPostsPage = () => {
    const { authorId } = useParams();
    const { goBack } = useNavigation();
    const { data: posts, loading, error } = usePostsByAuthor(authorId);

    if (loading) {
        return <Loader message="Loading posts..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                error={error}
                onGoBack={goBack}
            />
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="text-center mb-8">
                <BackButton onClick={goBack} className="mb-4" />
                <h1 className="text-2xl font-semibold mb-1">Posts by Author {authorId}</h1>
                <p className="text-base">{UI_CONSTANTS.POSTS_COUNT_MESSAGE(posts?.length || 0)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard key={post.id} post={post} showAuthor={false} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-base py-8">
                        <p>{UI_CONSTANTS.NO_POSTS_MESSAGE}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthorPostsPage;
