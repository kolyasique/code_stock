// Смотрит высоту экрана и в зависимости от нее возвращает число.
// Используется для эндлесс скролла на разном разрешении

const useCountItem = () => {
	// если поставить больше 0 то запрос будет повторяться
	const [countItem, setCountItem] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			if (windowWidth >= 1279.9) {
				if (windowHeight > 1300) {
					setCountItem(70);
				} else if (windowHeight > 750) {
					setCountItem(50);
				} else {
					setCountItem(30);
				}
			} else {
				if (windowHeight > 1200) {
					setCountItem(30);
				} else {
					setCountItem(20);
				}
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return countItem;
};
export default useCountItem;

// Применение

const countItem = useCountItem();
