'open /ptmp2/wd23sm/testnu/sprg.ctl19asb0'
'open /ptmp2/wd23sm/testnu/sprg.ctl19or0'
'open /ptmp2/wd23sm/testnu/sprg.ctl19or5'
'open /ptmp2/wd23sm/testnu/sprg.ctl19or10'
'open /ptmp2/wd23sm/testnu/sprg.ctl19or20'
*
'run /wd5/wd51/wd51js/rgbset.gs'
'set display color white'
'clear'
*
'enable print out.gr'
*
'set t 1'
'set lev 1000 100'
'set grads off'
'set grid off'
*
'set parea 1.0 5.5  1.5 7.5'
'set axlim 0 8'
'set cthick 7'
'set ccolor 1'
'set cstyle 1'
'set cmark 0'
'd ave(tcu,t=1,t=160)'
'set cthick 4'
'set ccolor 1'
'set cmark 0'
'set cstyle 1'
'set grads off'
'd ave(tcu.2,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 2'
'set grads off'
'd ave(tcu.3,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 3'
'set grads off'
'd ave(tcu.4,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 5'
'set grads off'
'd ave(tcu.5,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 6'
'set cthick 7'
'set grads off'
'd ave(q1.4-qr.4,t=1,t=160)'
'draw title GATE Mean Heating : 19L'
'draw ylab Pressure (hPa)'
'draw xlab (Q1-QR)/Cp (K/Day)'
'set string 0 tr 4 0'
'set strsiz 0.2'
*'draw string 1.0 7.6 (a)'
'run /emcsrc3/wd23sm/scripts/lnspcc.gs leg6q1q2'
'set strsiz 0.15'
'draw string 1.0 7.65 (a)'
*
'set parea 6.0 10.5  1.5 7.5'
'set axlim -13 0'
'set cthick 7'
'set ccolor 1'
'set cmark 0'
'set grads off'
'set cstyle 1'
'd ave(qcu,t=1,t=160)'
'set cthick 4'
'set ccolor 1'
'set cmark 0'
'set cstyle 1'
'set grads off'
'd ave(qcu.2,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 2'
'set grads off'
'd ave(qcu.3,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 3'
'set grads off'
'd ave(qcu.4,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 5'
'set grads off'
'd ave(qcu.5,t=1,t=160)'
'set ccolor 1'
'set cmark 0'
'set cstyle 6'
'set grads off'
'set cthick 7'
'd ave(-q2.4,t=1,t=160)'
*
'draw title GATE Mean Drying : 19L'
'draw xlab -Q2/Cp (K/Day)'
'set strsiz 0.15'
'draw string 6.0 7.65 (b)'
'run /emcsrc3/wd23sm/scripts/lnspcc.gs leg6q1q2'
*
'print'
