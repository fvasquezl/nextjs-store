interface CategoryProps {
    params: {
        categories: string[];
        searchParams?: any
    };
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params;
    return (
        <div>
            <h1>Categoria dinamica:{categories}</h1>
        </div>
    );
}