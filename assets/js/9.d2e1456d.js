(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{336:function(e,t,n){"use strict";n.r(t);var v=n(33),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"字符编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[e._v("#")]),e._v(" 字符编码")]),e._v(" "),n("p",[e._v("编码分为：Ascii, Ansi(扩展ascii), gbk, gbk2312, gbk1830, unicode")]),e._v(" "),n("p",[e._v("由于计算机存储的二进制，Ascii中提供了数字，字母，特殊符号对应规则，一个字符一个字节，一个字节八位，所以128个表示，由7位扩展到八位，有256个表示，后期由于有中文需求扩展出了Ansi,gbk2312，gbk，gbk1830等，中文一个字符两个字节，但由于不同的国家地区128个后的对应规则不同，适用性受限，需要根据不同的地区来安装指定的支持编码规则，因此后期提出unicode,将所有的编码对应统一为一个码表，并提出了编码规则，utf-8一个字符三个字节，ucs2 js编码规则一个字符两个字节，utf-32等，字符的编码规则决定了内存的存储规则。不对的编码规则在操作读取上按一定的编码规则读取，防止乱码问题")]),e._v(" "),n("p",[e._v("base64（大小写字母，数字0-9，/,+）由于对应一些情况编码不能正常的通过传输保留下来，所以提出了通过6位来对应多有的字符规则，2的6次64位码，通过64个符号来对应出规则，这样可以保证所有编码能正常的显示。\n规则为正常三个字节24位utf-8,所以base64通过4字节24位来表示，通过对二进制码值，截出6位作为一个字节，并补全到8位，之后再转为对应的10进制数，通过查找对应的base64编码位置，最终得到转换后的base64编码，btoa\n在针对Ascii码可以正常实现编码转换为base64码值,通过atob来解码\n例如：window.btoa('1')")]),e._v(" "),n("p",[e._v("关于bom编码问题，在gbk转为utf-8时，会出现bom编码在头部，通常称为大头编码（feff）和小头编码(fffe)，也叫零宽度字节码，这种模式主要是为了让编码在解析时，以什么顺序来读取编码来转为正常的字符")]),e._v(" "),n("p",[e._v("不同的环境默认展示的方式不同，浏览器以十进制标识，计算机内部以二进制标识，node环境以16进制表示，数字的表示0b二进制，0o八进制，十进制，0x十六进制")]),e._v(" "),n("h2",{attrs:{id:"url编码规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url编码规则"}},[e._v("#")]),e._v(" url编码规则")]),e._v(" "),n("p",[e._v("基本编码（字母，数字，特殊符号），由于URL解析规则没有标准化，所以不同的环境导致了对URL编码的规则不同，由于系统，浏览器处理，网页编码")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("meta http"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("equiv"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"content-type"')]),e._v(" content"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"charset-uft8"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),n("p",[e._v("导致浏览器处理方式结果不同，（直接输入地址，带参数的url地址，ajax请求中地址）通过js处理来统一编码传递到后端处理\nescape unescape / encodeurl decodeurl / encodeurlcomponent decodeurlcomponent 部分处理的url种的不支持字符")]),e._v(" "),n("h2",{attrs:{id:"restful规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restful规则"}},[e._v("#")]),e._v(" restful规则")]),e._v(" "),n("p",[e._v("rest即表现层状态转换，软件架构思想移植到网络软件架构，软件架构通过单系统之间通信，web网络之间主要以系统之间的交互，建立在以基础上满足rest规则的项目架构即restful如何更加简洁，易扩展，易管理理解的客户端服务端交互规则，web访问通过url来确定所访问内容，我们把内容叫做资源，任何可以访问的实体均可作为资源resource,我们通过地址只体现出资源，以名词来描述体现，资源，表现层即资源类型（text,html,css...），状态转换,三种表述通过合理的方式来展现，资源只体现在一个统一url标识来获得，即每个资源都只有一个唯一的标识指定，表现层通过请求头信息content-type，accept来体现我们资源类型形式，状态转换如果可以让服务器端知道我们所需要的操作，通过http行为操作来转换我们需要做的操作（get,post,put,patch,delete）")]),e._v(" "),n("ul",[n("li",[e._v("通过地址来指定一个唯一的可访问资源 url")]),e._v(" "),n("li",[e._v("通过一个类型标识content-type，accept来标识资源类型")]),e._v(" "),n("li",[e._v("通过约定的行为来表示一个资源的状态转换 (get, post, put, patch, delete)")])]),e._v(" "),n("p",[e._v("即我们定义restful规则：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1、指定一个接口访问地 址域名\n2、我们可以通过域名带版本或者写入请求头信息带版本以区分\n3、对url标识符的定义，以名词定义，通常和操作表有一一对应关系\n4、界定查询参数传入例如?limit=10\n5、选定url标识合适的操作行为 例如 获取列表行为通过get\n6、通过约定好返回状态标识\n7、通过返回信息，体现出利于操作理解，hypermedia超媒体模式\n")])])]),n("p",[e._v("状态码:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1xx 信息，服务器收到请求，需要请求者继续执行操作,\n2xx 成功，操作被成功接收并处理\n3xx 重定向，需要进一步的操作以完成请求\n4xx 客户端错误，请求包含语法错误或无法完成请求\n5xx 服务器错误，服务器在处理请求的过程中发生了错误\n\n100 Continue 继续。客户端应继续其请求\n\n101 Switching Protocols\n    切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议\n\n200 请求成功\n\n201 Created 已创建。成功请求并创建了新的资源\n\n202 Accepted 已接受。已经接受请求，但未处理完成\n\n203 Non-Authoritative Information\n    非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本\n\n204 No Content\n    无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档\n\n205 Reset Content\n    重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域\n\n206 Partial Content\n    部分内容。服务器成功处理了部分GET请求\n\n301 永久重定向\n\n302 临时重定向\n\n304 未修改。所请求的资源未修改\n\n305 Use Proxy使用代理。所请求的资源必须通过代理访问\n\n307 临时重定向。与302类似。使用GET请求重定向\n\n400 客户端请求的语法错误，服务器无法理解\n\n401 请求要求用户的身份认证\n\n403 服务器理解请求客户端的请求，但是拒绝执行此请求\n\n404 请求的资源（网页等）不存在\n\n405 客户端请求中的方法被禁止\n\n406 服务器无法根据客户端请求的内容特性完成请求\n\n500 服务器内部错误，无法完成请求\n\n501 服务器不支持请求的功能，无法完成请求\n\n502 Bad Gateway\n    作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应\n\n503 Service Unavailable\n    由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的\n    Retry-After头信息中\n\n504 Gateway Time-out\n    充当网关或代理的服务器，未及时从远端服务器获取请求\n\n505 HTTP Version not supported\n    服务器不支持请求的HTTP协议的版本，无法完成处理\n")])])]),n("h2",{attrs:{id:"osi七层网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#osi七层网络"}},[e._v("#")]),e._v(" osi七层网络")]),e._v(" "),n("p",[e._v("应用层，表示层，会话层，传输层，网络层，数据链路层，物理层")]),e._v(" "),n("p",[e._v("每一层都完成指定的功能，分别为对接下一层，实现各层分离任务，但又互相可以更协调的完成配合,从上往下每一层都是在加上本层一些头，从低往上解包")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("物理层\n: 由于传输通过高低电频来完成所代表的的0，1码，通过对0，1码来组合出不同状态表示，物理层主要是完成对0，1的传输，通过一些物理介质来完成，比如：电缆，网线，光纤等，这一层是最基本的介质层")])]),e._v(" "),n("li",[n("p",[e._v("数据链路层\n: 首先建立了物理层面的设备连接，其次完成建立逻辑连接，进行硬件地址的寻址，差错校验，主要体现在mac地址寻址交互完成通网络的传输，例如：交换机,mac地址目的提供了各个主机直接可以通信的唯一身份标识，mac地址为6个字节48位组成，每一个字节16进制来表示，例如：00,00,00,00,00,00;其中前三个字节是代表厂商，后面是主机的随机标识，也是为每一个主机分配的身份标识")])]),e._v(" "),n("li",[n("p",[e._v("网络层（IP层）\n: 由于很多情况主机不一定在同一个网络下，所以IP层为了解决如何寻址到非同一个网络下的地址，通过找到建立交互MAC地址链接通信。例如：路由完成IP地址的寻址")]),e._v(" "),n("p",[e._v("IP地址由4个字节32位组成，例如：00000000，00000000，00000000，00000000；分别对应转换后的十进制数字，IP地址分为两部分组成，网络部分和主机部分，网络部分代表了所属的网络分类，主机部分代表所属网络类中的主机，当我们需要查看多个主机是否在同一个网络部分，这样可以直接通信，不在同一个网络部分，需要通过网关来完成多个网络断之间来寻址通信")]),e._v(" "),n("p",[e._v("对于网络分别分为A,B,C类")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("A类：0nnnnnnn, 00000000, 00000000, 00000000；\n     network     host      host      host\n     1-126        2的24次方-2台主机\n     网络部分 2的7次方\nB类：10nnnnnn, 00000000, 00000000, 00000000\n     network   network    host      host\n     128-191                2的16次方-2\n     网络部分 2的14次方\nC类：110nnnnn, 00000000, 00000000, 00000000\n     network   network   network    host\n     网络部分 2的21次方           2的8方-2\n")])])]),n("p",[e._v("由于IP为32位，所以IP最多有2的32次方表示，提出子网掩码来解决IP扩展，如何可以理解出是两个主机是否在同一个网络部分，每一个网络部分分类对应的子网掩码网络部分标识为1，主机部分标识为0，通过对IP中的二进制与子网掩码二进制进行与操作，如果最后表示的十进制相同，则说明在同一个网络部分，否则不在，由于每一个网络部分都会有两种情况未初始化主机0和广播主机255，0主机完成直接对外暴露可以访问，255主机可以向同一个网络部分发送广播通信")]),e._v(" "),n("p",[e._v("IP现在有IP4，IP6，由于IP4出现的地址不够用，提出了IP6完成扩展，以及减少了很多网络之间的转发寻址")])]),e._v(" "),n("li",[n("p",[e._v("传输层(tcp,udp)\n: 完成报文分段传输，通过序列号来编号数据段，编号来保证数据不会丢失，没一个数据包有可能有多个数据段，数据包中20字节，五层，一层（源端口，目标端口）完成端口之间指向，通过不同的端口来完成要完成的任务，二层序列号，32位序列号来进行数据段的编号，保证传输中数据段顺序，三层确认号，32位确认号当收到序列号数据段后，要确认下一次需要的数据端号，ACK也是建立在SYN seg基础上，并通过数据段长度(length),四层有首部信息，标识符(urg紧急序号,psh优先序号,syn同步序号,ack确认号,finit结束号)共16位，后16位传输窗口，完成传输的效率控制，五层16位标识组成，16为校验；最后为数据内容")]),e._v(" "),n("p",[e._v("tcp特点：面向连接的，数据包不丢失，数据传输效率相对低，\n安全性好")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("三次握手\n(client synx=0,\nserver syny=0,ack=synx+1,\nclient ackx=syny+1 acky=synx+1\n)，\n四次挥手\nclient fint\nserver ack\nserver fint\nclient ack\n")])])]),n("p",[e._v("udp特点：非面向连接，数据包容易丢失，数据传输效率相对高\n完全性低")])]),e._v(" "),n("li",[n("p",[e._v("会话层\n: 建立、管理、终止会话(在五层模型里面已经合并到了应用层）对应主机进程，指本地主机与远程主机正在进行的会话")])]),e._v(" "),n("li",[n("p",[e._v("表示层\n: 数据的表示、安全、压缩(在五层模型里面已经合并到了应用层),格式有，JPEG、ASCll、EBCDIC、加密格式等")])]),e._v(" "),n("li",[n("p",[e._v("应用层(HTTP FTP TFTP SMTP SNMP DNS TELNET HTTPS POP3 DHCP)\n: 网络服务与最终用户的一个接口")])])]),e._v(" "),n("p",[e._v("补充: DHCP完成动态配置协议，可以动态分配IP地址")]),e._v(" "),n("p",[e._v("DNS域名解析，完成对域名的对应IP的查找，通过根域，顶域，一级域名，子域；根域主要是全世界的13组服务，顶域(.cn/.com/.gov/.edu/.co/.net...)")]),e._v(" "),n("p",[e._v("HTTP：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("uri 为统一资源的标识符，可以确定一个资源的标识方式\nurl 为统一资源的定位符，可以通过一个约定来定位资源的标识方式\nurn 为统一资源的命名符，可以通过一个约定来定位一个资源的唯一名字\n目前http通过url来定位一个资源，分为协议，用户校验，域名，端口，资源路径，查询字符串，hash锚点定位符；\n在客户端与服务器端之间的通信分为请求报文，响应报文，HTTP的通信建立在tcp基础上完成，\nHTTP版本(0.9,1.0,1.1,2)目前运用1.1版本每一个版本升级都是提供了一些解决方式;\n\n0.9版本单纯提供了GET方式，内容类型html格式，处理模式单一\n\n1.0版本提供详细的行信息(请求行信息包括协议版本、请求地址，响应行信息包括协议版本，状态码，状态信息),\n头信息(请求头信息，响应头信息),主要在内容类型即实体信息上扩展content-type,缓存标识的提供\ncache-control expires lastmodified etag,cookie set-cookie, accept-encoding\ncontent-encoding, accept-language,accept, 请求方法(post, delete)\n\n1.1版本持久连接tcp复用加入connect:keep-live(减少tcp三次握手，四次挥手次数),管道流并行发送请求针对\n一个tcp连接中并发请求,添加Content-Length区分数据块标识请求结束,分块传输编码即产生一块数据发送一块，\n不需要等候操作完全(Content-Length不需要都完全后进行操作) Transfer-Encoding: chunked,添加请求\n方法PUT、PATCH、HEAD、 OPTIONS、DELETE Host: www.example.com\n\n2版本以spdy为基础,请求信息，转为二进制格式，以针的模式传送,多工处理，客服端，服务器端多发送请求响应，\n不需要按顺序回应，以有的可以处理，双向的、实时的通信,数据流由于发送的并发的性，不确定数据的所属，通过\n标注ID来区分，并且在传输过程可以发起阻断，但不影响连接关闭，tcp连接可以等候其他发起,头信息的压缩，部分\n相同的头信息压缩，减少传输时间 客户端和服务器同时维护一张头信息表所有字段都会存入这个表，生成一个索引号，\n以后就不发送同样字段了，只发送索引号,服务器推送，服务器端提前可以推送一些加载信息，服务器可以预期到客户\n端请求网页后，很可能会再请求静态资源，所以就主动把这些静态资源随着网页一起发给客户端了\n\n请求报文，响应报文；\n请求报文：请求行(版本号,请求方法，请求地址)\n        请求头(通用头，请求头, 实体头)\n        请求体 内容\n响应报文：响应行(版本号，响应信息，响应状态码)\n        响应头(通用头，请求头, 实体头)\n        响应体 内容\n内容类型：(text, multipart, application, audio, video, image)\n通用头： cache-control\n        date\n        connection\n        content-type\n        pragma\n请求头： accept\n        accept-ranges\n        accept-encoding\n        accept-language\n        range\n        cookie\n        referer\n        user-agent\n        if-modified-since\n        if-none-match\n        expires\n        upgrade-insecure-requests\n        origin\n响应头：content-encoding\n        content-range\n        content-language\n        content-length\n        set-cookie\n        last-modified\n        Etag\n        Strict-Transport-Security: max-age=31536000; includeSubDomains\n")])])]),n("p",[e._v("HTTPS:")]),e._v(" "),n("h2",{attrs:{id:"二进制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制"}},[e._v("#")]),e._v(" 二进制")]),e._v(" "),n("p",[e._v("ArrayBuffer, Buffer, File, Blob")]),e._v(" "),n("p",[e._v("早期脚本里不能处理二进制模式，计算机本质以二进制模式处理的，提供二进制操作方式可以减少其他类型转换为二进制的中间过程，提高效率，node中提供了")]),e._v(" "),n("p",[e._v("Buffer操作方式，提供了对二进制内存的操作容器，可以操作二进制数据，ArrayBuffer为前端所提供的一个二进制内存存储容器，但是不能作为直接操作二进制，所以提供了typeArray（同类型数据类型）, DataView（不同类型数据）,来完成以什么读取方式来操作二进制，Blob为二进制大对象,针对文件对象操作，主要为二进制内存数据以及提供了存储数据类型，File 文件类型在Blob基础上建立的应对操作系统来完成可以文件上传，通过FileReader,createObjectUrl来完成对二进制数据转为url,或者以要求格式来展示")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Blob: 针对文件二进制操作，")]),e._v(" "),n("p",[e._v('Object.createObjectUrl将文件创建出地址以提供a link download="filename"')]),e._v(" "),n("p",[e._v("Object.createObjectUrl创建图片可展示地址")]),e._v(" "),n("p",[e._v("FileReader方式将二进制格式转换为对应展示数据格式(text, DataUrl, ArrayBuffer),read.readAsText,read.readAsDataUrl,\nread.readAsArrayBuffer")]),e._v(" "),n("p",[e._v("blob.slice 分片上传")]),e._v(" "),n("p",[e._v("File继承了它所有可以用的属性方法")])]),e._v(" "),n("li",[n("p",[e._v("ArrayBuffer: 更细致话操作二进制(初始化固定大小，可以自由增减，放在栈存储，没有pop,push方法，本身只能读，不能直接操作写)")]),e._v(" "),n("p",[e._v("typeArray 以同类型数据操作")]),e._v(" "),n("p",[e._v("DataView 以可以为不同类型数据操作")]),e._v(" "),n("p",[e._v("FileReader 转换为ArrayBuffer格式数据")])]),e._v(" "),n("li",[n("p",[e._v("Buffer: node中提供的操作二进制对象，针对IO操作，主要作为后端处理二进制模式")])])]),e._v(" "),n("p",[e._v("资料： https://www.cnblogs.com/penghuwan/p/12053775.html")]),e._v(" "),n("h2",{attrs:{id:"v8内存管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v8内存管理"}},[e._v("#")]),e._v(" v8内存管理")]),e._v(" "),n("p",[e._v("浏览器通过v8引擎提供一个js执行处理环境，一些编译语言一般提供一些手动管理内存方法，JS为解释性语言，浏览器内部提供一个垃圾回收机制来管理内存的使用，防止内存消耗过大，内存泄露。内存对于程序运行提供空间，如果内存不能及时回收，对分配空间运行程序会有问题")]),e._v(" "),n("p",[e._v("js后端执行环境node,前端执行环境浏览器，通过v8来进行内存的分配，系统32位，64位分别提供0.7G,1.4G")]),e._v(" "),n("p",[e._v("程序内存分配代码去，栈（变量，指针，函数执行），堆（对象，闭包）堆中可以分为使用的，未使用的")]),e._v(" "),n("p",[e._v("v8垃圾回收机制")]),e._v(" "),n("p",[e._v("基于分代垃圾回收")]),e._v(" "),n("p",[e._v("新生代，老生代")]),e._v(" "),n("p",[e._v("新生代：存活在内存时间短暂，短期能够收回")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("新生代通过分为两个空间，from区，to区；每次存活的会从from区移入to区，非存活对象将被释放，多次互换空间，一般5次后对象会被移入老生代中\n\n64位：32m 两个区各16m\n\n32为：16m 两个区各8m\n")])])]),n("p",[e._v("老生代：长期存活在内存中，有些还需要手动释放来完成")]),e._v(" "),n("p",[e._v("存活对象的判断：通过引用计数方式，记录每一个对象引用的次数，当次数为0时会被最终释放；从根节点出发遍历整个树，分别查看引用次数")]),e._v(" "),n("p",[e._v("标记清除，标记整理")]),e._v(" "),n("p",[e._v("标记清除：从根向下查找，若产生了引用，则标记为存活状态，非引用到的将会再遍历所有树后释放，但有由于标记零散，导致碎片化，内存出现不连续状态，导致浪费")]),e._v(" "),n("p",[e._v("优点：速度快，不需要划分空间完成，")]),e._v(" "),n("p",[e._v("确定：会出现内存碎片化，导致内存不能再分配连续空间，浪费空间")]),e._v(" "),n("p",[e._v("标记整理：针对碎片化，通过标记状态时，并将标记的移动到右侧，释放对象移动到左侧，最后整理释放，这样保证了内存的连续；")]),e._v(" "),n("p",[e._v("优点：不需要划分空间，可以起到整理内存，防止碎片化问题")]),e._v(" "),n("p",[e._v("缺点：速度慢，耗时长")]),e._v(" "),n("h2",{attrs:{id:"mvp-mvc-mvvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvp-mvc-mvvm"}},[e._v("#")]),e._v(" MVP, MVC, MVVM")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("MVP（Model, View, Presenter）")]),e._v(" "),n("p",[e._v("M -> P ->/<- V")]),e._v(" "),n("p",[e._v("Presenter(发布层) 取代了Control层位置，完成业务逻辑的控制")]),e._v(" "),n("p",[e._v("完全解耦了数据模型与视图之间的关系，两者的变化通信建立在presenter层来做， 使逻辑更加清晰，但也加大了这层的代码量，后端开发的一种软件架构")])]),e._v(" "),n("li",[n("p",[e._v("MVC (Model, View, Control)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("M\n")])])]),n("p",[e._v("C    V")]),e._v(" "),n("p",[e._v("C -> M     M -> V    V -> C")]),e._v(" "),n("p",[e._v("Control层负责业务逻辑控制，用户操作视图发起变化，通过指定Control层来更新到Model层，Model层的变化间接的反应在View上，这种同步变化的体现也是建立在Control层，并不是直接建立了关系，这种一种后端软件架构，这种模式适合大型项目开发，由于View层与Model层有间接关系，在划分业务逻辑上有不太清晰的可能")])]),e._v(" "),n("li",[n("p",[e._v("MVVM (Model, View, ViewModel)")]),e._v(" "),n("p",[e._v("M -> VM -> V")]),e._v(" "),n("p",[e._v("上面的两种方式不适用于前端架构开发，首先前端开发方式不具有后端开发的复杂性，更多的关注的视图层，其次前两种框架并不适用于解决前端开发中的需求问题，前端更多的是和页面打交道，问题点产生在频繁的DOM操作，频繁的通过DOM来变化视图的内容更新，视图上的行为操作通过手动完成数据的同步，所以不管是从视图变化到数据，还是数据变化到视图，都需要建立在大量频繁的操作完成，开发中的性能也是局限在这里；MVVM模式通过ViewModel作为了建立在Model与View之间的桥梁，主要是完成两者间的实时通信更新，视图上通过DOM Listener，数据上通过Date binding，实现双向通信，解决了前端开发中的大量DOM操作，数据的独立话，以前如何更好的实时的同步两者。")])])]),e._v(" "),n("h2",{attrs:{id:"https验证流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#https验证流程"}},[e._v("#")]),e._v(" https验证流程")]),e._v(" "),n("p",[e._v("http作为应用层，内容明文发送，导致过程中不安全易被劫持且篡改，https为http+tsl结合，tsl提供了ssl加密。tsl为ssl的标准化版本。")]),e._v(" "),n("p",[e._v("加密的三种方式：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("非对称加密： 生成一对秘钥，以公钥与私钥，只能通过相对应的秘钥来加密和解密，公钥加密，私钥解密，私钥加密，公钥解密；形成一对一，秘钥安全。\n\n对称加密：以相同的秘钥进行加密与解密。在客户端与服务端形成多对一，秘钥保护决定这加密的安全。\n\n散列加密：这种方式通过散列函数的方式将内容进行加密形成不可逆的加密，特点为内容不变加密结果稳定，加密长度固定，加密不可逆\n")])])]),n("p",[e._v("https中传输： 利用了对称加密完成内容加密，利用非对称加密完成秘钥的协商，利用散列完成防止内容防篡改；在传输的过程中，服务端需要将自己的公钥传给客户端，作为客户端和服务端之间建立秘钥协商完成加密秘钥的创建，由于中间产生攻击者，攻击者可以劫持替换伪造公钥，将伪造公钥发给客户端，形成在客户端和服务端之间形成中间监督信息，如何保证两端的交互的真实和准确性，通过建立数字证书来完成。")]),e._v(" "),n("p",[e._v("数字证书的申请：创建服务端一对非对称秘钥，向权威证书机构发起申请证书请求(csr),证书机构利用其持有私钥签名(服务器公钥+数字签名(持有者信息的摘要通过服务端私钥签名))+持有者明文信息，摘要是为了保证防止内容篡改，对摘要进行私钥签名保证防止篡改摘要信息伪造，当完成申请后，服务端保留了服务端私钥和其数字证书，证书内部则由明文申请者信息，服务端公钥，数字签名(服务端私钥签名化的申请者信息摘要)")]),e._v(" "),n("p",[e._v("验证流程：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("- 客户端发起请求，发送客户端支持的tsl版本，加密套件(支持的加密方式)，客户端随机数给服务端\n\n- 服务端完成配对，将tsl版本，加密套件，服务端随机数，数字证书响应给客户端\n\n- 开启验证，通过在浏览器和操作系统中查找到颁发证书的机构，验证证书过期与否，当访问的网址与证书中申请者记录是否匹配，利用证书机构对应证书的公钥进行解密证书，得到证书中的服务端公钥以及数字签名，利用服务端公钥对数字证书解签名，等到申请者信息摘要，利用申请者支持的散列算法进行加密申请者信息得到摘要并与解签名摘要进行比对，相同则验证通过\n\n- 通过验证后客户端生成计算秘钥，利用服务端公钥加密传输给服务端\n\n- 服务端利用私钥解密得到计算秘钥，响应客户端完成秘钥协商\n\n- 两端利用客户端随机数，服务端随机数，计算秘钥进行计算生成最终的秘钥，在数据传输过程中，利用最终秘钥加密数据，形成的秘钥是对称秘钥传输过程中的秘钥\n")])])]),n("h2",{attrs:{id:"权限相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限相关"}},[e._v("#")]),e._v(" 权限相关")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("session,cookie")]),e._v(" "),n("p",[e._v("常规方式，以后端生成的session（key,value）值进行记录，记录的方式可以服务端本地存储文件格式、数据库存储，以及配合redis进行存储。")]),e._v(" "),n("p",[e._v("用户的登录以产生唯一的会话标识，将用户会话标识进行记录，并通过客户端浏览器支持cookie方式下次携带将用户sessionID携带给后端，由后端完成通过查询数据库是否存在确定用户是否有权限，以及在有权限的情况下进行其他权限后的操作。")]),e._v(" "),n("p",[e._v("这种模式为常规记录会话交互权限记录方式，但对于多服务器下需要共享权限，可以提供共享服务来创建记录，当访问其中子服务，通过后端去拉取共享服务记录，并缓存到本服务")])]),e._v(" "),n("li",[n("p",[e._v("jwt")]),e._v(" "),n("p",[e._v("jwt(json, web, token),以json格式记录了相关信息运用在web上，token生成的方式以header,payload,sign三种通过.进行拼接，header记录相关加密方式，加密类型等，payload则记录相关授权token时间，签发者，过期时间等，签名则完成后期对访问用户的校验。")]),e._v(" "),n("p",[e._v("base64(JSON.stringify(header)).\nbase64(JSON.stringify(payload)).\nbase64(Hmac(base64(JSON.stringify(header)),base64(JSON.stringify(payload)), slat))")]),e._v(" "),n("p",[e._v("将以上拼接字符返回给前端，由前端完成后期访问通过header信息Authorization将标识携带给服务端，服务端通过再次hmac进行与签名比对是否一致来确定，这个过程中可以解析payload信息得到过期时间，验证是否过期")])]),e._v(" "),n("li",[n("p",[e._v("oauth2.0")]),e._v(" "),n("p",[e._v("主要解决客户端与第三方服务之间通信交互，获取到第三方服务提供的数据。")]),e._v(" "),n("p",[e._v("首先不管以下面那种方式，都需要首先先想第三方服务申请使用权限，由第三方服务颁发给你客户端 ID（client ID）和客户端密钥（client secret）这将决定在发起过程中是否是第三方运行的应用客户。")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("授权码方式")]),e._v(" "),n("p",[e._v("这种模式，授权码提供给客户端服务器作为获取令牌的一个前提，而不是直接获取，且最终的交互都是建立在客户端服务端与第三方服务端间的。用户不会直接访问了令牌")]),e._v(" "),n("p",[e._v("发起确认授权请求->获取授权码->发起令牌请求->获取令牌和刷新令牌->发起获取信息->返回用户信息")]),e._v(" "),n("p",[e._v("这里以客户端前端，客户端服务端，第三方服务端，第三方认证服务，第三方资源服务")]),e._v(" "),n("p",[n("strong",[e._v("流程")]),e._v("：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("首先由客户端前端引导发起提示，是否允许去发起授权，这部分可以以客户端本身提供了一个交互过程（这一步也可以直接跳过，以第二部方式直接完成）")])]),e._v(" "),n("li",[n("p",[e._v("在上一步确认允许授权，会跳转到第三方提供的授权页，点击授权会向第三方认证服务发起授权")])]),e._v(" "),n("li",[n("p",[e._v("在上一步发起后，由第三方认证服务提供授权码，并以上一步提供的redirect_url作为回调地址将code带回到指定地址redirect_url，这里的redirect_url必须为注册第三方是指定的。这个地址是客户端服务端提供的地址，主要完成进行与第三方服务交互流程地址")])]),e._v(" "),n("li",[n("p",[e._v("在上一步通过跳转redirect_url得到了code，由客户端服务端再次发起请求令牌申请，这个过程会请求携带code, client_id,client_secure等")])]),e._v(" "),n("li",[n("p",[e._v("在第三方认证服务得到上一步请求，创建access_token与refresh_token将以redirect_url方式在返回给客户端服务端")])]),e._v(" "),n("li",[n("p",[e._v("客户端服务端可以存储access_token以及refresh_token，并将access_token以及refresh_token以及过期信息等")])])])]),e._v(" "),n("li",[n("p",[e._v("隐藏模式")]),e._v(" "),n("p",[e._v("这种方式，省略了授权码的获取流程，直接发起令牌获取，在不需要有客户端服务时可以运用这种方式，这种方式不存在客户端服务端存储token了。")]),e._v(" "),n("p",[e._v("发起确认授权请求->发起令牌请求->获取令牌和刷新令牌->发起获取信息->返回信息")]),e._v(" "),n("p",[n("strong",[e._v("流程")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("首先由客户端前端引导发起提示，是否允许去发起授权，这部分可以以客户端本身提供了一个交互过程（这一步也可以直接跳过，以第二部方式直接完成）")])]),e._v(" "),n("li",[n("p",[e._v("在上一步确认允许授权，会跳转到第三方提供的授权页，点击授权会向第三方认证服务发起授权")])]),e._v(" "),n("li",[n("p",[e._v("在上一步发起授权，发起方式以令牌方式，这样向认证服务发起获取令牌，以回调地址redirect结合hash模式将token放入地址片段方式返回，这里跳转地址为客户端前端页面，以片段方式回调是防止了中间人拦截攻击出现获取到access_token,但还是暴露在了用户端")])])])]),e._v(" "),n("li",[n("p",[e._v("密码模式")]),e._v(" "),n("p",[e._v('如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌，这种方式称为"密码式"（password）')]),e._v(" "),n("p",[e._v("由客户端服务已经获取了到第三方服务应用的用户名与密码，在客户端服务端发起请求来携带用户名和密码获取token,以post方式获取返回给客户端服务端")])]),e._v(" "),n("li",[n("p",[e._v("客户端模式")]),e._v(" "),n("p",[e._v("最后一种方式是凭证式（client credentials），适用于没有前端的命令行应用，即在命令行下请求令牌。")]),e._v(" "),n("p",[e._v("通过命令方式直接发起，在第三方认证服务后直接将token返回给客户端服务端，这里只针对的区分了应用端，而不针对了具体用户")])])]),e._v(" "),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://wiki.connect.qq.com/%E5%BC%80%E5%8F%91%E6%94%BB%E7%95%A5_server-side#Step2.EF.BC.9A.E8.8E.B7.E5.8F.96AuthorizationCode",target:"_blank",rel:"noopener noreferrer"}},[e._v("qq授权流程"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.oauth.com/oauth2-servers/single-page-apps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("oauth 参考地址"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("oauth 阮一峰"),n("OutboundLink")],1)])])]),e._v(" "),n("h2",{attrs:{id:"数据通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据通信"}},[e._v("#")]),e._v(" 数据通信")]),e._v(" "),n("p",[e._v("数据之间的通信方式有三种模式单工模式，半双工模式，完成双工模式。")]),e._v(" "),n("p",[e._v("单工模式：双端只建立了一个通道进行通信，并单项流向进行通信，常见：电视，媒体传输方式")]),e._v(" "),n("p",[e._v("半双工模式：双端建立连接后，在某一个时刻只能由一方到另一方，不能同一时间同时发起请求和响应，常见：http的传输方式")]),e._v(" "),n("p",[e._v("完全双工模式：双端建立连接后，可以在同一个时刻下进行发起请求和响应请求，实现双向通信，常见：websocket")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("客户端与服务端通信：")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("轮询: 以客户端主动发起请求，以一定的时间进行与服务端建立连接，通过定时器完成。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" 特点：以客户端为发起方；整体编写由客户端来完成\n\n 缺点：由于是客户端发起，每一次发起相当于与服务端建立了一次连接，性能不好，过于频密的发送导致请求会因为浏览器限制问题阻塞，响应受阻，响应延迟，甚至长期无反应\n")])])])]),e._v(" "),n("li",[n("p",[e._v("长轮询：以服务端将客户端发起请求暂时挂起，不立刻返回，等到服务器超时或者超时时间内将响应状态或者信息返回给客户端，客户端通过接受到的消息或者状态码来完成后续是否在继续发起下一次请求操作。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" 特点：模式还是以客户端主动建立发起请求，服务端完成延迟响应，解决了多次发起建立连接，这样可以建立一个长连接完成相关。\n\n 缺点：还是由客户端来发起的，做不到服务主动推送，双向通信\n")])])])]),e._v(" "),n("li",[n("p",[e._v("websocket：以基于TCP连接，复用HTTP连接完成协议切换转变为独立的一种全双工通信方式，这样就可以实现客户端与服务端的双向通信，互相推送消息，通过各端的事件监听来完成各端的接受和发送。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" 优点：实现了真正的双向通信推送功能\n\n 缺点：相对其他连接方式要复杂\n")])])])]),e._v(" "),n("li",[n("p",[e._v("server send event：http2版本所支持的新的服务功能，主要实现了单道通信，以服务器为主动推送信息给客户端，本质还是建立在http上，通过服务端协商内容模式为流模式，保留客户端和服务端之间的长连接状态，这样通过服务端返回头信息来标识告诉客户端，监测事件类型，返回数据格式等信息，客户端通过监测事件来得到最终推送信息。在通信的过程中通过id标识信息，当断链后由客户端将id以last-event-id模式再次发起给服务端，并通过retry头建立发起时间间隔，再次与服务端建立连接")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" 优点：还是建立在HTTP上实现的，还是有客户端主动发起建立\n\n 缺点：高级浏览支持此功能，ie浏览器不支持，运用是依赖于浏览器是否支持\n")])])])])])])]),e._v(" "),n("h2",{attrs:{id:"多页通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多页通信"}},[e._v("#")]),e._v(" 多页通信")]),e._v(" "),n("p",[e._v("多页面通信：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("同域下通信")]),e._v(" "),n("ol",[n("li",[e._v("window.open与window.opener")])]),e._v(" "),n("p",[e._v("通过建立了父子窗口，窗口之间可以通过window.opener模式下可以得到子窗口发起的父窗口进行传递通信")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("localStroage与onstoreage")])]),e._v(" "),n("p",[e._v("通过开启监测onstoreage事件来观察localStorage操作变更的信息")]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Broadcast Channel API的使用")])]),e._v(" "),n("p",[e._v("通过建立一个公用的通道，在同域下的各上下文向通道注册，关联到同一个通道，这样各上下文通过postMessage,onmessage,onclose完成发送，接受，关闭等操作。在各上下文窗口下完成注册通道\nnew BroadcastChannel('broadcast name')")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("shared work")])]),e._v(" "),n("p",[e._v("通过建立一个共享工作线程来进行与多个窗口，多个Iframe间的通信，主要思想还是建立了共享访问线程来进行，通过postMessage,onmessage来完成发送与接收")])]),e._v(" "),n("li",[n("p",[e._v("跨域下通信")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("window.postMessage")])]),e._v(" "),n("li",[n("p",[e._v("以多页面嵌套同一个iframe模式作为桥梁，在页面与iframe间以postMessage模式进行跨域通信，由于引入同一个iframe，在通过postMessage通信后可以在iframe内完成多个tab来源信息之间的同域下信息操作和交换，再通过postMessage模式完成与各自tab信息交换")])])])])]),e._v(" "),n("h2",{attrs:{id:"sso"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sso"}},[e._v("#")]),e._v(" SSO")]),e._v(" "),n("p",[e._v("SSO(单点登录)，以解决在多个应用下，由于登录入口统一问题，使用户登录一次，保持登录状态存在多个应用中。")]),e._v(" "),n("p",[e._v("关于登录常态以单个应用，第一种由服务端产生登录用户的会话状态记录，状态记录存在在(内存，持续存储数据库)，由客户端通过携带cookie完成状态的保持并带入到后端进行后端校验；第二种由token模式，服务端不在存储记录信息，减少信息存储，以签名方式校验token值的准确性，摆脱cookie受同域性问题，以前端请求头携带方式传入后端校验。")]),e._v(" "),n("p",[e._v("鉴权方式：以http Authorization/sessionId/jwt token")]),e._v(" "),n("p",[e._v("客户端，应用服务，认证服务：")]),e._v(" "),n("p",[e._v("客户端：指代前端应用")]),e._v(" "),n("p",[e._v("应用服务：指代后端服务")]),e._v(" "),n("p",[e._v("认证服务：独立的权限控制服务")]),e._v(" "),n("p",[n("strong",[e._v("在sso模式下主要考虑两点")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("解决权限处理的共享，由于多应用服务，独立出一个单独服务提供给其他应用服务共享鉴权")])]),e._v(" "),n("li",[n("p",[e._v("解决客户端携带登录状态，有由于跨域导致cookie携带问题")])])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("部分跨域/同域")]),e._v(" "),n("p",[e._v("在客户端，应用端同构并与认证服务在同域或者部分跨域下，可以通过认证后将token记录在根域上cookie下，这样三端下都会产生记录信息，访问多个应用服务自然会携带登录记录，由应用端完成认证服务处理；客户端可以通过处理服务建立一个登录标识，来判断是否登录过")])]),e._v(" "),n("li",[n("p",[e._v("完全跨域")]),e._v(" "),n("p",[e._v("在客户端与应用端同构下与认证服务不同域，通过将登录信息写在认证服务根域下，由认证服务下登录成功后跳转会同构服务下的处理地址并携带同构服务向认证服务发起验证的code码，这样由其向认证服务发起验证，code码在认证服务验证成功后返回授权同意同构服务颁发当前应用的登录标识以(cookie/jwt)都可以，这里建立认证服务于认证服务登录标识与应用服务标识记录，在退出情况下进行校验发起认证服务删除登录信息。主要还是通过各应用服务颁发各应用登录信息，通过认证服务允许授权才可颁发。")]),e._v(" "),n("p",[e._v("在客户端与应用端不同构时，在应用服务没有登录标识情况下，浏览器会跳转到认证服务页面登录，登录成功后跳转到客户端访问页面携带code，由客户端发起向应用服务请求，需要将code传递给应用服务，应用服务携带code完成向认证服务发起认证授权，授权成功后返回给应用服务，由应用服务颁发应用登录信息标识(由于完全不同域cooke不能利用，利用响应token)返回给客户端，客户端记录下登录token，再以后每次请求中携带token，由应用服务验证；在没有应用服务token时候打入认证服务登录页，若有应用服务token则校验下关联的认证服务标识是否存在是否过期，过期不存在打入认证服务登录。")]),e._v(" "),n("p",[e._v("在完全跨域下主思想还是由认证服务作为登录信息唯一记录，以此来决定应用服务是否有授权权利，各应用仅仅颁发各自应用服务登录信息")]),e._v(" "),n("p",[n("img",{attrs:{src:"/blog/images/lg03.png",alt:"An image"}})])])]),e._v(" "),n("h2",{attrs:{id:"登录模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录模式"}},[e._v("#")]),e._v(" 登录模式")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("常规模式(cookie,session)")]),e._v(" "),n("p",[e._v("基于服务端sessionId与浏览器cookie来完成记录用户访问状态，sessionId主要是完成对创建用户服务端记录，再下次访问时候，需要携带标识来告诉服务端，所以通过联系浏览器cookie方式来完成携带给服务器.")]),e._v(" "),n("p",[e._v("客户端：cookie(记录sessionId)")]),e._v(" "),n("p",[e._v("服务端：session")]),e._v(" "),n("p",[e._v("特点：简单方便，针对单服务，单应用，服务端在建立集群时候要考虑session的共享问题，客户端考虑是否跨域能否共享多应用；session需要存储，这里存储可以在(内存，硬盘，数据库)")]),e._v(" "),n("p",[n("img",{attrs:{src:"/blog/images/lg01.png",alt:"An image"}})])]),e._v(" "),n("li",[n("p",[e._v("jwt模式(cookie/localStorage,token)")]),e._v(" "),n("p",[e._v("这种方式通过在登录成功后利用用户的相关信息(用户id等)生成token,token格式(head,pload,sign),将token直接存储在cookie中，或者localStorage,客户端直接下次请求携带上token，如果是在cookie中，则直接携带，若在localStorage,通过拦截请求将token加入到头信息中")]),e._v(" "),n("p",[e._v("客户端：cookie/localStorage")]),e._v(" "),n("p",[e._v("服务端: 验证token")]),e._v(" "),n("p",[e._v("特点：这种方式优点在于不在存储登录标识，只做校验token，利用了散列函数得出的token是不可能逆，通过用户信息+散列方式+slat(秘钥)计算出token,只要通过客户端登录信息，进行服务端校验是否存在合法，在利用token反向得到header信息，pload信息，通过重新计算，得到签名信息比对携带签名信息，最终完成校验,这种方式解放了存储，在集群服务端时候很实用")]),e._v(" "),n("p",[n("img",{attrs:{src:"/blog/images/lg02.png",alt:"An image"}})])]),e._v(" "),n("li",[n("p",[e._v("第三方登录")]),e._v(" "),n("p",[e._v("需要应用服务向第三方注册，得到允许发起操作的clientid, 秘钥，这样保证了是第三方服务认可的应用服务")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("第三方授权登录")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("获取授权码code")]),e._v(" "),n("p",[e._v("在确认授权后会由第三方返回授权码给应用服务")])]),e._v(" "),n("li",[n("p",[e._v("验证授权码，获取access_token")]),e._v(" "),n("p",[e._v("在应用服务得到授权码向第三方服务开启获取访问令牌")])]),e._v(" "),n("li",[n("p",[e._v("利用access_token获取用户信息")]),e._v(" "),n("p",[e._v("在应用服务获取到访问令牌后发起获取用户信息")])])])])]),e._v(" "),n("p",[e._v("在得到用户信息会建立相关本地需求信息存储记录，利用用户信息可以产生应用服务token记录，这个token可以不存储数据库，进行验证")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[e._v("扫码登录")]),e._v(" "),n("ul",[n("li",[e._v("生成二维码")])]),e._v(" "),n("p",[e._v("产生二维码以及赋予二维码唯一id")]),e._v(" "),n("ul",[n("li",[e._v("轮询二维码")])]),e._v(" "),n("p",[e._v("建立请求轮询查看二维码状态")]),e._v(" "),n("ul",[n("li",[e._v("扫码发起")])]),e._v(" "),n("p",[e._v("手机扫二维码，得到二维码id,发起请求告知应用服务二维码状态变化")]),e._v(" "),n("ul",[n("li",[e._v("轮询更改状态")])]),e._v(" "),n("p",[e._v("轮询查看到二维码状态变化了，返回客户端，客户端控制页面展示")]),e._v(" "),n("ul",[n("li",[e._v("确认授权")])]),e._v(" "),n("p",[e._v("手机扫码后点击授权，同意授权，这一步绑定了二维码与用户信息(token)，并发起授权操作")]),e._v(" "),n("ul",[n("li",[e._v("授权验证code")])]),e._v(" "),n("p",[e._v("应用服务得到授权code,发起向第三方服务获取令牌")]),e._v(" "),n("ul",[n("li",[e._v("利用code获取access_token")])]),e._v(" "),n("p",[e._v("应用服务获取到access_token")]),e._v(" "),n("ul",[n("li",[e._v("利用access_token获取用户信息")])]),e._v(" "),n("p",[e._v("应用服务通过access_token获取到用户信息以及相关token")])])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);