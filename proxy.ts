import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'




 
 const AUTH_ROUTE = ["/login","/register"]
 const PUBLIC_ROUTE = ["/","/about","/login","/register","/property"]


// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
//    const cookieStore = await cookies()

    const accessToken =  request.cookies.get("accessToken")?.value

   

    const decodedToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null

    let  userRoll = null;

    if(decodedToken){
        userRoll = decodedToken.role
    }

    // prevent to go login page
    if(accessToken && AUTH_ROUTE.includes(pathname)){
        if(userRoll ==="ADMIN"){
            return NextResponse.redirect(new URL('/admin-dashboard',request.url))
        }else if(userRoll ==="LANDLOARD"){
              return NextResponse.redirect(new URL('/landloard-dashboard',request.url))
        }
        else if(userRoll ==="TENANT"){
              return NextResponse.redirect(new URL('/tenant-dashboard',request.url))
        }else{
              return NextResponse.redirect(new URL('/',request.url))
        }
    }


  const isPublic = PUBLIC_ROUTE.some(route => {
    return pathname === route || pathname.startsWith(route + "/");
});

   if (!accessToken && !isPublic) {
  return NextResponse.redirect(new URL("/login", request.url));
}

    if(pathname.startsWith("/admin-dashboard")&& userRoll !=="ADMIN"){
         return NextResponse.redirect(new URL('/',request.url))
    }else if(pathname.startsWith("/landlord-dashboard")&& userRoll !=="LANDLORD"){
         return NextResponse.redirect(new URL('/',request.url))
    }else if(pathname.startsWith("/tenant-dashboard")&& userRoll !=="TENANT"){
         return NextResponse.redirect(new URL('/',request.url))
    }





//   return NextResponse.redirect(new URL('/', request.url))
   return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: 
// '/admin-dashboard/:path*',
  
  [
'/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'
  ],
}