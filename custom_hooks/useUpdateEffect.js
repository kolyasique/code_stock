// Видоизмененный useEffect, который не срабатывает при маунтинге компонента

// Инициализация
const useUpdateEffect = (effect, deps) => {
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			return effect();
		}
	}, deps);
};

//Использование
useUpdateEffect(() => {
	console.log(currentOrderData, 'DATA TAK DATA');
	dispatch(getContainersInOrder({ terminal_id: terminalId, order_id: orderId, client_id: currentOrderData.client.id, page: 1 }));
}, [currentOrderData]);
