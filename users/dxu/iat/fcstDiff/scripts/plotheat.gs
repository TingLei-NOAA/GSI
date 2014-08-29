'open flx.ctl'
'set mpdset hires'
'set lat 0 60'
'set lon 230 300'
'define a=ave(lhtflsfc,t=1,t=7)'
'set cint 25'
'set black -0.2 0.2'
'd a'
'draw title \\T126 F24 7-day mean surface Latent heat flux [W/m^2]'
'printim latheatmean_f24_t126.png x1000 y800'

'c'
'define b=ave(shtflsfc,t=1,t=7)'
'set cint 25'
'set black -0.2 0.2' 
'd b'
'draw title \\T126 F24 7-day mean surface Sensible heat flux [W/m^2]' 
'printim sensheatmean_f24_t126.png x1000 y800'

'quit'
