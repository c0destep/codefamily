$('#countdown').countdown('2021/03/04 23:30:00', {
        elapse: true
    })
    .on('update.countdown', (e) => {
        var $this = $(this)
        if (e.elapsed) {
            $this.html(e.strftime('<span>%-n Dias %H:%M:%S</span>'))
        } else {
            $this.html(e.strftime('<span>%-n Dias %H:%M:%S</span>'))
        }
    })

$('#countdown').countdown('2021/03/04 23:30:00', (e) => {
        $(this).html(e.strftime('%-M Min %-S Seg'))
    })
    .on('finish.countdown', (e) => {

    })