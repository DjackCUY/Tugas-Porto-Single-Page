export function Statistics({ stats }) {
    return (
        <section className="mt-10 p-4 bg-gray-50 rounded-xl border text-center">
            <p className="text-gray-600 text-sm">Profile Views: {stats.views_count}</p>
            <p className="text-gray-600 text-sm">
                Profile Completed: {stats.profile_complete_percent}%
            </p>
        </section>
    );
}