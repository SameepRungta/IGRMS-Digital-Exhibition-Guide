document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    console.log('Item ID:', itemId); // Debugging line

    if (itemId) {
        fetch('items.json')
            .then(response => {
                console.log('Fetch response:', response); // Debugging line
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data loaded:', data); // Debugging line
                const item = data.find(item => item.id === itemId);
                console.log('Item found:', item); // Debugging line
                if (item) {
                    document.getElementById('itemTitle').textContent = item.title;
                    document.getElementById('itemDescription').textContent = item.description;
                    document.getElementById('itemImage').src = item.image;
                } else {
                    console.error('Item not found');
                    document.getElementById('itemTitle').textContent = 'Item Not Found';
                    document.getElementById('itemDescription').textContent = '';
                    document.getElementById('itemImage').src = '';
                }
            })
            .catch(error => console.error('Error loading item data:', error));
    } else {
        console.error('No item ID specified');
    }
});
