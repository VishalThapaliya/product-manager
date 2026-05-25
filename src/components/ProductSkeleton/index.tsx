export const ProductSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Array.from({length: 6}, (_, index) => (
                <div 
                    key={index} 
                    className="bg-white border rounded-xl shadow-sm p-4 animate-pulse"
                >
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>
            ))}
        </div>
    )
}