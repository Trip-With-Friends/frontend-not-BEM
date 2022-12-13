const open_page_select_btn = document.getElementById(
    'open-select-page'
)
const select_page_menu_actions = document.getElementById(
    'select-page-menu-actions'
)
const close_menu_btn = document.getElementById(
    'close-menu-btn'
)


open_page_select_btn.addEventListener('click', (ev) => {

    if (open_page_select_btn.value == 'closed') {
        select_page_menu_actions.style.display = 'flex'
        open_page_select_btn.value = 'opened'

    } else {
        select_page_menu_actions.style.display = 'none'
        open_page_select_btn.value = 'closed'
    }

})

close_menu_btn.addEventListener('click', (ev) => {

    select_page_menu_actions.style.display = 'none'
    open_page_select_btn.value = 'closed'

})