$(document).ready(function () {
    $('#search').click(function () {
        $.ajax(
            {
                method: 'GET',
                url: 'https://api.github.com/search/repositories?q=' + $('#search-key').val(),
                success: function (response) {
                    response.items.forEach(
                        function (item) {
                            $('.list-group').append(
                                $(`
                                    <li class="list-group-item">
                                        <span class="badge">${item.forks_count}</span>
                                        <h4>${item.full_name}</h4>
                                        <p>${item.owner.login}</p>
                                        <img 
                                            src="${item.owner.avatar_url}"
                                            width="30px"
                                        />
                                    </li>
                                `)
                            )
                        }
                    )
                }
            }
        )
    })
})