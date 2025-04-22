import { Link, useParams } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { id: 1, name: '전자제품' },
        { id: 2, name: '의류' },
        { id: 3, name: '식료품' },
    ];

    return (
        <div>
            <h2>카테고리 목록</h2>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

const Products = () => {
    const { categoryId } = useParams();

    const products = [
        { id: 1, name: '노트북', categoryId: '1' },
        { id: 2, name: '스마트폰', categoryId: '1' },
        { id: 3, name: '셔츠', categoryId: '2' },
        { id: 4, name: '청바지', categoryId: '2' },
        { id: 5, name: '사과', categoryId: '3' },
        { id: 6, name: '우유', categoryId: '3' },
    ];

    const filteredProducts = products.filter((product) => product.categoryId === categoryId);

    return (
        <div>
            <h2>상품 목록</h2>
            <nav>
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <Link to={`/categories/${categoryId}/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

const P_detail = () => {
    const { categoryId, productId } = useParams();

    const p_detail = [
        { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
        { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
        { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
        { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
        { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
        { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
    ];

    // productId는 문자열로 들어오므로 숫자로 변환해서 비교
    const detail = p_detail.find(
        (d) => d.categoryId === categoryId && d.id === Number(productId)
    );

    return (
        <div>
            {detail ? (
                <h1>
                    {detail.name} 정보: {detail.description}
                </h1>
            ) : (
                <p>상품 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export { Categories, Products, P_detail };