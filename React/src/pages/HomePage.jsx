import { PostCard, Loader, ErrorMessage } from '../components/ui/index.js';
import { usePosts } from '../hooks/usePosts.js';
import { UI_CONSTANTS } from '../constants/index.js';

const HomePage = () => {
    const { data: posts, loading, error } = usePosts();

    if (loading) {
        return <Loader message="Loading posts..." />;
    }

    if (error) {
        return (
            <ErrorMessage
                error={error}
            />
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold mb-1">Microblog Posts</h1>
                <p className="text-base">{UI_CONSTANTS.POSTS_COUNT_MESSAGE(posts?.length || 0)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts?.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
