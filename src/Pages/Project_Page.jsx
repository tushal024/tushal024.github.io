// import React, { useState } from 'react'

import { useState } from "react";

import tt from "../assets/res1.png"
// import jiomart from "src\assets\JIOMART_SS.png"

const Project_Page = () => {
    let [state, setState] = useState([
        {
            title: "JIOMART ",
            img1: "https://media-hosting.imagekit.io//fbc6b9d918f64a18/d00fa928-421f-4266-b5c9-5dcba11e39fe.jpg?Expires=1835962578&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Zhje2n9iT487SYFKu-nWAecRk1aF1RPrAt9n5yH5XnuRpPeQJpuzEPbCPxOffIAILDeMTq8lJ5LNqXKj~~RL6iFWX~Q70zzgmscFci6y-~RmkyY3HZ1sOdcgeW1JHxn3frDEO4dsGs9r53znaQbwubI1rqVMQxd0b8QyB-fejx4bAf6FLXItB4qqbCsfim-N-CTDxSoO0H9HjArNAlUdHQbhnXMqLkzvolYJeNSkWuc9jku26Jk2ifNT0xs6EfF96rqO5Mu9808bNBq6VSvQRWL-Tv4JGA0DQsUTktaJ-f1LVWwBOhwLnj4jArG1ZPIP-6QZ2q2z~29yNMj106QXJQ__",
            gitlink: ``,
            live: `https://cute-yeot-5fcd47.netlify.app/`,
            type: "website"
        },
        {
            title: "TATA CLIQ",
            img1: "https://media-hosting.imagekit.io//2bf5ede4919847a1/2c103bdb-b9eb-4ec4-a426-4c8d6e99167b.jpg?Expires=1835962644&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aCeuO31q0MuQ2YPrs3aqMCmxN7OaclhqvoU5UIJUfL~R1ylnjbalI62MXeoLXHUWZrReHE4i3GUkGrF4zVWV50tGMkgjlJrUffo9~ze4eaLjyYmcAa4rW-unA1-wCcbn7FUaGYeB9AbjwsFQp08W8fzTxHkOfd5m2IvAlQAWSv3PnCyG6OvRy1cW8Ibo9NZAPpXbllmZhyPbiNEc6F9lnq-P1oK2bYWYyXGv1fRxu1sKTJ4h9XX80JPGNcwAywLhTxUq5008oBg86xtVFOY8FJO6cFd0xQxbofhe6UF56xkRNVYs3avmpSMCHzDl-sKMoiBljFioy4Y09xiv~vGfsw__",
            gitlink: ``,
            live: `https://675e768a9935fb268569daf7--tatacilq.netlify.app/`,
            type: "website"
        },
        {
            title: "TUSHAL",
            img1: "https://media-hosting.imagekit.io//980128f284334c99/a500c9f4-2645-4194-a00a-424486da6852.jpg?Expires=1835962719&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c1Cxjjlr9y53rHSHJfXbKz5C5yOqE9xV0QjXnfyTqYxGR6xCQ4BeidDELJh8z88N~4poWlQ98xJBUeG5aU5g~avBRn~LCTlLFmZmTti-MLzwsWxHVftB2ccsw5uqpnKpWj45yL1XcQ8TEP9nGAANFSycZ8psoZquFshyIP1CnkX6-3RmyClr6CyjrdJw3DM~5FFYJmvFM8cp-FEzvmGjd0MlahWRObDnhnMfayTzrmqunKUjXMTsBVbKCIjtQcN4nLufwjxUUAFF9xGoveW5vC-bIlLISgJnpmoTnsMVD0ILlFLtF4AlOYDjVTYj41U3M3kaDLwD7BBNWeX5YK~8~g__",
            gitlink: ``,
            live: `https://cozy-banoffee-5db4a1.netlify.app/`,
            type: "Adminpanel"
        },
        {
            title: "First Cry",
            img1: "https://media-hosting.imagekit.io//ad21c15b0e5f4eae/3068cd63-9ba8-491d-9681-c38e555e1f18.jpg?Expires=1835962868&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ps06pMAJ0BDnZbctmZv0uBfo~0VFGDoTH5q9Yb3LhhUVjaCIX4z7mMVGsWzOWUO9sGpz6Tpx4mD2q30j3GaO1f1BfmYd~RITVcv15kLRK5nZmw1dR6vGEhwuObXbXJIjE6CAUIL07~y-FebC8n-Chqu0n9aQaHLf9Qk6~6eehMfR7rNKas30bPOFMnnefui9XXXEZKfcBHOzcBvWvktHSLNtlxHjjAsibK6pxlHzPeL1qm5rMkd4-gMsg~iTPEAd7jBoYt0s6imEWu48b3nx6VN6t3XnZ~HR-olxwK9eqR3u0-VPimcUD5tKgXw7NwxFCWf-CDz8im7z7-jyh18xhg__",
            gitlink: ``,
            live: `https://majestic-haupia-2853b3.netlify.app/`,
            type: "website"
        },
        {
            title: "NAXLY ",
            img1: "https://media-hosting.imagekit.io//37edc36da61c491e/82870f3a-16d9-4b0d-99bb-ca029e66c966.jpg?Expires=1835958372&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xOPxOxDmyYEHKii18AIDSBCEeuQLehW6hI-NPUzdsx~jmvDTHjYyT5n6Ez4n5VDky5-H0J0VrEzjoCF6E1O5WUSdyIsqOxUxg7sldkC1KJ9rAuPtR7tViibBr6qs4UyhkHY8RJEvYTNMFg0KQG8N61C098SsxuwwdmJKKFI3yi4aDo~2cM4gUbSOhaHswVxfsydlDNejagBG5XC-UVqFdwGrkme8bKLyUzJZZG1~IHqoZxNZyK63DzjxG03t4NAiR-S~0uDCcbBYG8526NVWufj2bnNl3SPluZwLD6N3o33rGtwAb9yrl6MlMQmsO12TvfCA9mNCMGd7x44Nly967A__",
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://musical-basbousa-c9eac3.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Web Tech ",
            img1: "https://media-hosting.imagekit.io//790ccb1b381e463d/2fcf230c-43f7-41a5-bac7-95e40652949e.jpg?Expires=1835958629&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=A7HuMT92V8yq~i4AyF5jVD~4UbSD0ChDBQkaVsamRI8LdFa5aEUohFKxQ0ROctHZ2996Vr9wOrEcQ5GHcLsjSme0DKvJWvxIlmr08x6sZ2mtThd-InLQPJNzZA-OGbd6q-66bflq5bGeZvjo69pFnFtmLKsxNW0YTQvRxNPk~hGvfkYW6bgVxpmDkyd1iYxwFTzKVwYcQ7LSq~okFk1CLzgPEpoMXg9Iw78kLX4Xv3Ip5Smkk4n~8EwCGoAr1DD7yofA7X1xZTkzBc55mmSNAvgrJBMCzgi167oRMpIsRWa-EHgCQqTjgv3FSSbNdnPPzsV53zyAYrK8Xxc4t-Ru3Q__",
            gitlink: ``,
            live: `https://dainty-eclair-0106e7.netlify.app/`,
            type: "webpage"
        },
        {
            title: "AUTUSIN",
            img1: "https://media-hosting.imagekit.io//c6c50d95ae7b4af2/93d30f40-f52c-4c43-aa5f-6168a774d514.jpg?Expires=1835962940&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AZgzr-z8-n0t~Yx~-8iYiYD0qIVOihOj5r-qXQP~-SL6Mx0ldJqI3FDnPOeQ1NFUmuORvDFjm33lKbHNcx-oXdp~8~Tuv7HNWtX3MgDrbuVXW5Fdy~Gep72s2CbEjHlNCwHuy92K~kO~eaNgdmAPaQiT~SirzgsaA96eBS2m-Ux3DKRLdrCsox1sETNp8uJNMYAK7NxAXXQcIcl46K2IQk-6zMzv1r2zDhkInwQssrbf6uzMbroR~BATZIr4w5XFchrkkUgUMQHwF5peFN9rdPAkHvSzt2KP5f18AKkiGevATrFUiaDMaMvJIk8yTDP-AZsDXYUBPTW81TrB5~UgJg__",
            gitlink: ``,
            live: `https://ephemeral-marigold-88e6df.netlify.app/`,
            type: "website"
        },
        
        {
            title: "REOBIZ",
            img1: "https://media-hosting.imagekit.io//35c4daa63c1e4ad9/c528b6b2-0c1c-468e-ba66-ee9f1d233b51.jpg?Expires=1835958745&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kM9hLDgm6~PEX6V7jikooIl0dl0N~HQ2-8B6-WjFj2G5ywva1cttYGvcKpY0f8cjrBwWbx4-v0zbokELwaGbcG91-q-bcn8nwdYiR7ZaHQoumfP6eZnm-f9oipBsMUfuMyAoHPjOkPm39r8gcGpAVE4pxiYdfCB0qRGD8KqONjZtmrIqsr~MiisZTMan498PteHSAUH8JxgrwVZnKXgdQuM1phk5ekmeSOmMLsKjBQbjXmAaeCQ1EsDbdeTD6lA-g5hD6pMkQPy4Ui5PET3AGaHcIR8hAK4y~fkremInbL63n9Y9yCFuC-d9JhLRtAGWWyjaGcOx3IEMJvICk-qd9Q__",
            gitlink: ``,
            live: `https://lustrous-kitsune-78e85a.netlify.app/`,
            type: "webpage"
        },
        {
            title: "AI-MAX",
            img1: "https://media-hosting.imagekit.io//ca5fe60ce6b54f7c/188166ec-77da-4fe4-8600-865e359b661d.jpg?Expires=1835962310&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=btUjTx57nL1kqwTBgpMH4trw5LabwhM95zFyZoCQN1z~pFfhJsbtKDhxhi14Huv6FuSxq8k-6DuT2s8sQNIZ~jkxLE6Bt-tWQ0b7x3RlUn-vB8RW0LiTEuUVite2FTq53WNvzwD7~9i7J7O90TFxOxRKvUjtu0L02pbWc-pHklmpXa-WLqIMWCjwcoSzCwop9N3K5EseIAy41rcb5UV4frD62B18WrKjAe63pekGgL2SBzqQUtl82yCuJ6ez9iDOpFnkiqM7fcLE7FwR~I0wNV3rQ32aj1t~ktNdwIszdk5NfX5ofBzXJN5qILBqfq-AFBRm7hyljr6U2chtbOHp3Q__",
            gitlink: ``,
            live: `https://elaborate-bonbon-dc68b2.netlify.app/`,
            type: "webpage"
        },
        {
            title: "STEEX",
            img1: "https://media-hosting.imagekit.io//3e9893c1744145be/28fac76b-b84d-4d30-ab35-0d694214e275.jpg?Expires=1835962783&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VNiCPW3lffN1aWPiAx6eNIT2fNC0MKmQOOveT1bnP~cAD~0ouAx7bVn4217qce~1b26yAsdcVtt2zc79nAnWlTGrf6e5O7cdXbYAgRjamc5UUg3~lE7ufPbYXW~S2fhHX~iDXzfwZn~EesMo7q5yEmiipP8PBy7JJmqrFKw0r3L1tfWen73Y64r199w~jKqoskqjjnSh8odccm6TrbxbzMvjhxzcXOHcbfMcrLRp06TAzIPmLDNw9i0ZSxA9WHYQfuZvgiG4SFacEk8MOyXTVPz~qVbN6e7Dzr0lzEF~YofJN-TOOFIBZ49nfrBGqbSXEMrn9IPwDDvNmOb-hZaKVw__",
            gitlink: ``,
            live: `https://jocular-fenglisu-388afe.netlify.app/`,
            type: "Adminpanel"
        },
        {
            title: "One School",
            img1: "https://media-hosting.imagekit.io//a0bd3b23f94f4fe5/da1ab4e8-8bca-4571-9ff3-088ac5ceb340.jpg?Expires=1835958918&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YCmJQ~O1roRoNNUPndDNoLNI5KT9H5~a-CpO7k-sx6axMn0fjS2DlPYhW5U0PQLpbLLi57KPsW-5GNQjV92aEhY2vvy~G9lP3iaQ4-WwKkqoD6Q2sQIVpZfGnEyNJ-kBRV3B568cvhsofR2XTAMCGxpr-d5KaGcaC6Wpo1qYrTDBqyQbaWWkw21soAoNf4IL2nnfGYU34JcgvmFYmdpXMljFNqkFVAnd8sTjEtrf4BM7-XwSTAjv9OR~zs-ORUsL8FiuCdNAT-vfj5-mht7WPUx1p~eYW3A8zUrxl28AP2xhjcSx7-4GBFKOOqNpDQLRbt0h6qDLBLWHmQNFrTOpfw__",
            gitlink: ``,
            live: `https://gregarious-chebakia-635175.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Zen AI",
            img1: "https://media-hosting.imagekit.io//fa6acddf60d64788/088fc951-aacc-4e4a-be1c-3d2a3db23ef3.jpg?Expires=1835958984&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JlShnkDsqBSaZKQ~ritXcFUxbQZonCJMuE3nsLI5bYuV-NAKUPUsPp5Md2ozHMqgiZHic8VYffaUM0SXHR7kDPxTqIiN0xJXlzYnEMTOs3Csj1CBuHFY7VDcc2xC~737Qyy91qLoYvgJAq-266kOFK~OWG7wBcJLDmsKQDGyO-tjiOaPf20hG9FuJSpyP~ncg5YF3IbcvSlx~p3efKnmw8RpjEDPVM5gNbnaO6VC0axjwuwZU0P-UoC9fpX5xDCpyJALuHvuxuxn-ejeemJ0-7xc1clFM1P~nfxxvU--EvP20LkxFfZUhua09XQDsQV-6zhM9F7qJwA8Q8qQalFHiQ__",
            gitlink: ``,
            live: `https://stately-monstera-ccc6bd.netlify.app/`,
            type: "webpage"
        },
        {
            title: "HostMate",
            img1: "https://media-hosting.imagekit.io//5c5f92a79b8e4573/407c011f-d634-44a3-9d85-b82a6de68ffb.jpg?Expires=1835959107&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PzquM63nylZv-P5jVeQsAcl3crQzjAK-7idzTdXdbMmjAAnsqjih83tgG8abZE7js~6U9cd3UddUlrE0qopKau4v3fSMEsmzBdHNdS~~XJZnHO5wt07VPh8etRs7HGcGPWRQVsSKXeYiktwaCXFFc703E2di7H6DEpJdk77VUJP0ruxj8Hc53Bkmq7BLVKiVzWxwC8hFwE71uxmZ53rbKPaOCz-pva9CzrItQ21nBcq2zpfh00F0DF~7JpsdtWDd2JnmZalFOgA-xQCvEGEaoUxFI9uNb~fdDXy1PPMoAauHfxv8mTGwWAnK-3k3jlCqhBDouhQYYh~pwDLEVgDnlQ__",
            gitlink: ``,
            live: `https://roaring-scone-ca51d3.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Creato",
            img1: "https://media-hosting.imagekit.io//fc705d086cf44c21/bd89a19a-7373-4a88-9f05-af5182d3ce26.jpg?Expires=1835959155&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U9PmMalFmkCNmtpEpJXFlgqND4jfUuj0e9BbMkGgzDMsiQxwutb9gl7wEekLXbnb4BbwPoGDA94XUeVgsuzhD39eAnwo2zOjLEYO0NAvhKoAp2gLxwulJmfhpjJCddqjHw9Fd-UzOLUC2XFefckjM3sFoFYe15zJclR9JAJfhS0VJHZPjhyRQcAspA8JzAGK0AOT35bhtJ0TF5urlZhA-WdYxoYaL426xzUTyNBB3jL7EpE0XBX2tudMMyzYsIYWUTSC79Ci~NzStf0ki8HIp6k9r-T0o~fjMZ-BqaYbHR6mRCIq43mAsSODM5IOPQpjCsnRUturIP-PIEMKm83icg__",
            gitlink: ``,
            live: `https://melodious-eclair-b05fde.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Eco-Hosting",
            img1: "https://media-hosting.imagekit.io//01024c35599f4dec/4b8b7125-ae87-4eb1-be43-2fef0a985cd0.jpg?Expires=1835959374&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uMtVupZp-CjzbgT6K0HXWc9DQ1QqTAZ-dQOadk6XTjkTann7Ytx76d-f~Jg-S1GIMMApVC2WFPrvEZw6PHWY8msAaau6RMElv1gS8CHMBecUkhaJ0EjaAc-6xEfqyCGTvTYbE8tIP4mkVYCC2q4tl4ple4O7HIZLhXXS8u6pzRxjrizOBsYWHFpNQlK5Xgvxmf7OSIxM3mku8qpEgz0IynHaHxEgcXPN6Ai8xdZRndOEXIqOtjdBIOfGkB9W4wrtD1rTWwTa~uvLDxj2k1oJNnOdy0bPLWTElqAqEhKmxj3Ytg9l8U1s1BgZ0~uKyX9Pv8Ji~L0qswq~qQ97wvdpOw__",
            gitlink: ``,
            live: `https://brilliant-yeot-417d15.netlify.app/`,
            type: "webpage"
        },
        {
            title: "SAPA",
            img1: "https://media-hosting.imagekit.io//6ed6abe849654196/df80a44e-5a52-4fb2-99e3-c172c9227f13.jpg?Expires=1835959524&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jxjSSRMDiZSRVTl~Z1V37FvmfuWEimQyvHISo5lME4rMSoumEpLY1lm85i1VaQyvSy9ZihfCwo1cWlhO6X0erfUxuomS1YknDPjLYWoiq7gUFIDxUgeSbkIphuKTd2LEa~E6Tq0k6aq960OiHYZgIIzWgbmRFnfw6OPf-U5axdwFUYdV~pG2dixqWexLyBRGiCUwEaY07Mzp9C0E1PxqZh6IlYQUyqP6G-94gDcxdrxv~b467HIrMMzU5ds0oqg3f5p26I-6RBVSeHHWc56m-Oh2LTJdhFpOEKI7k~6iO9Udtck7qOIeY~EfSoMBrCzrEpqG4AfAskIcyE6zsSJf-g__",
            gitlink: ``,
            live: `https://ubiquitous-chaja-b09686.netlify.app/`,
            type: "webpage"
        },
        {
            title: "JIVUX",
            img1: "https://media-hosting.imagekit.io//0e60ace18ddc4f6b/39448bf4-80cc-4cb3-871b-fb828cd8cb01.jpg?Expires=1835959572&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1y0op5NWt1mIQdLQZXmauiufz9Ho8JaYCLBlwwEqvXOl79b9ARSLAj9O3Rs486kBucuFeWiT1lQQb9ZdgT9VuBQJs4ObBuAEB~rvyaKftvsbeUxE4hPq6c8Y39OHWdrhh20OQ79J9jmtaHG59VAuC4lAcda1MqR0GZEGI-dlqNVkhDAmYq70Ll-nZbUiLRNGqtKxnxszgF4OH7p85kSCZeksS8OVywdDFYCVCznFVJ8DvE81s4q~X7oubAswIGxiCqdEp6Qzlxn~u5UFJGJTc4gfcsqKCqvp168kZHvFlIdXQRZofAPvPGljZoTT22h66gt8IGk8gYgk5FzOUf0FfA__",
            gitlink: ``,
            live: `https://lively-heliotrope-58ceca.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Interior",
            img1: "https://media-hosting.imagekit.io//f6e294b6d58649cb/e2ef9fbc-3153-40a3-8448-bce8217ce2cf.jpg?Expires=1835960112&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1vRVsGHN-QVUn~L77mBXTAOGRNVVQv7WkFPN2jnCA~6HOB-v1eYq8xlgtHLbfwp4F8RQxvonYnbKCKgR5vnzmHcgnlAbW7KaxvmWTTMdoVeSpPJN6y28q4t7LGNTqIj7okhXAz7MyBxip9EJ2eNguJtREEIJ90DWUbITLfHvLtlHeBkYf-es~3Qx8InkyBdGrzfVVtHafqTekkp3OlV7jKy-88iGF42O3PnLsCUtjmZXFfp-1CPzcsgMjibFDY4jGqiVWvV2yLja6GCmadI87-627u25TUi3BtNTLDmPQ0iMLdZmeKbGOVaxkseAe3s6N9ogWUEy~RHIQV5FO~CTWA__",
            gitlink: ``,
            live: `https://warm-empanada-65fe1b.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Clarks",
            img1: "https://media-hosting.imagekit.io//97105fa12ed64a2d/71ffd840-f75f-4af9-af1f-92a8ac70ee9e.jpg?Expires=1835960256&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bNRr1FpGFvFF9EcqDThBwBk-B~9zyGAkMXtDaQjvpQP7DWrQxEsTp4ZUXGkeYuUYtRq0G9Mp7YqWUQoP3chy5DJalF~Yym73B7zRlfyrwCLNVovZcjW0gg8zYtumvptDzB~gbx7Xbx6hAZT0DBrU-WsnaT9xUdoAQHr6olSyQxYOKtVrKG3InIwEbUTMryLTxb10MUZUiKwtVwW4H6JXiYzO9Wh8sESZ4LBjVwGXaZn3dL4UnkNuYYiL7H1dW8vZFpg~lx0ZDAtu60KBrHh0aKyFGUSYZ76X~GUtjlebJwGD28Dbl3f8lRcISwy0OIhg~zSHDBGcgTtPUtJF9vqYTQ__",
            gitlink: ``,
            live: `https://peaceful-fairy-e5cca7.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Dgency",
            img1: "https://media-hosting.imagekit.io//a948ae6148d04e4f/bca121fc-f801-4f1a-8f7a-0ec91a71cc60.jpg?Expires=1835960305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jnCWtqXOQtRy5Z5SIAu0DMy28r-fXavDCyM~54Ekw64f4KmbgJoDFjx00TB3K8~pgZk0d2TBbTfIGTjW1zvZKmNmNF5N-3rQvjBGaDRUni2k-NtEKutXKn4OCOuRKTViwS5xLaQxrmJpjpr249pAOQX5fgCHacog4E5nLQ3vRwjLkuMtFUNAedxvw7JnqcsuqdamUZwK3WHic9H~~EttjZNVM~KhSwBS20Jb-y~1Tvb2ZRkSEa7V8NdVB0SlkuHYG5jWiESUuLL6eSBVd3aodLUNarF9crsu4FPPvqRRxM3Bv55rRHgJ5Gs5rnDN8ASE1yMXLyOs-uWj3WJI8YcA1g__",
            gitlink: ``,
            live: `https://playful-choux-b6761f.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Feliciano",
            img1: "https://media-hosting.imagekit.io//89915bedc45d4202/31939210-4c26-4ce2-885f-1e078fdb3a83.jpg?Expires=1835960345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sy92lR3gH1Y-6YRYgj2JmaRMp1I9Q22sFwpJmrRrV~WU9n6diLPWupxeosd9WZTucbXyAl7~CzEyMOQNJ1~Y1au8sNApc2RbO8CDFcRKVHnhwsG79k0~B-6VhWDlaRvJQqidBsj2svKxB~MpbVE1e2ydbjt9XdYSr34QpCA9MJhO7c76F9Qds~9GvyS46OhWNLiFigW6DmDRGk2KB-QuJvY65GBJiZk9jBsDnka-Mt88-D8~~xprp-VAyHQNj4gqmR8KHrhutt3LpweCHNgEYKRNP3II01hixUeNc69OnTcvowL1NsMnmjumWxNm7huV8hoSzp6kJB96V3eA7vp-zg__",
            gitlink: ``,
            live: `https://merry-chimera-470034.netlify.app/`,
            type: "webpage"
        },
        {
            title: "FRIGHT BROKER",
            img1: "https://media-hosting.imagekit.io//f7ec7d399bf840e8/b4f6070a-3350-4496-8520-5cb572f7c6a8.jpg?Expires=1835960486&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jbNqCsSPNQz1EmMi1eEN9ZdKBOdQRNLN8xPidwE-Qbk2S-b-Bw3i-ZaPLvz3ZFlKZSlVXyB5VCCy4~x~DT6mabo6XcCgDjzRGHwvQ80w9etouzpy9NPZEu29lN-zsHQ~BiJxz0flAqjblOgXsTQwQgyAJ4BC4pJgaumfdfz9QRQ7NzMDgeLKpGtEevh1v~t8zykvd21t0IR4VhYPkkQpd-GBZRJWCsIDxSjDUrJZwNvhFvsYnv8fnR0fnQ08W56u8~vXECTa0rQwReSJoOWX6UvRXZ3EOKvdZQ20KHlN8K-EYcL7UnO-sSSXE5-HeyQda0rCLRcD4ZobDVzfYEkQfw__",
            gitlink: ``,
            live: `https://lucky-boba-8a82ca.netlify.app/`,
            type: "webpage"
        },
        {
            title: "Calvino",
            img1: "https://media-hosting.imagekit.io//fc2cb2360213419c/e33211df-7ba7-4e8c-9f1d-81443b4ee64d.jpg?Expires=1835960549&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c5sUddjDrJ~wRHVuZyf5uCeyV6AlV3jgvaX~9pxcmhxVjU8DqiKp0XSV0xMlwWaMn1zJXZPmbyk8oqJ6EY~Dl8YxGCQAPVxS5mGiUqEjR-ya773Xug~myNgQj9dyxJzuXrcAAN5ypJBGPnKKzcxZQxAFvSsPit9u~5SD4fFVdT8ZToVrwvtso4OTcsqpvJQLBCwSWQELfIKOM~8lvJriHZz4QqZPR2fFcvkm8tpGy685T4pyGCkOV8OpgAV~87cthMTZYyhuXKI35zhZCR3PBqoHA4AUxyXSv25qv~DDpT3kRWSoiPos1bAEZm~RyM7SLB7slrf5S6IcicIEHJoA2A__",
            gitlink: ``,
            live: `https://incomparable-cascaron-60701a.netlify.app/`,
            type: "webpage"
        },
        {
            title: "PATOO",
            img1: "https://media-hosting.imagekit.io//523605c5ccb1467b/5ec1d0cf-0f81-41f2-872e-1f9f25990628.jpg?Expires=1835960582&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xGM0Z7bXgiltVO-vxiW2pGXnsFtWzcW3BHT8DFEwwPoSxUaYsSMDcfwf0FIRZGN9k9cwz1vcwpAOjJI3Ko428PxQPvhc29DtqUsfpMuDkURkdqgG2RePaY2ErAfdDsHfG~OrPkkUQQ5XMcqxYE85PI8hgE~8rZNhoGo2vZwiatHAJLMvgxrYMp2xPVIaUx7jUXrR6ko23EVNZ0jUa0EyaCSZZR4HcNMTgATR2FjI82LnErmJjqsSEr483onsMjpbeF-naTFuNMDocbYUTfzBgfRQi8j0vPwI-~Kb8YvLvtpg1VRzESzkMWMQT6ncvLGlVWMZkMRq3F-AZ5wG05Kiig__",
            gitlink: ``,
            live: `https://spiffy-klepon-f8de46.netlify.app/`,    //.........
            type: "webpage"
        },
        {
            title: "DESTINO",
            img1: "https://media-hosting.imagekit.io//b2977ed0f9954482/658d8476-869e-4c88-97f3-8c118cf0c0d4.jpg?Expires=1835960692&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S15TwJmZ5C8~bOp7eHbxOxz-4ZHNTgkdhclJcz7fElELs~NjmoLXbJKpUxPWRQ0h8l6ZaYJBDkFd0yCUgRoPptB4HHoPJUf~gDIMWNF1-HYdr1iNDHUKzvICLQcfeK3dIR9-D~iwheKhvWfqYzm2jKFQhtU50Ijd49iCwZZLxhQnX0jYntxdajVIeCR0LF~KjUqZf~Tps6802qIZQsSZEilDOOqOxIUfkgs8tMkyLm6FWLLJzkI~i0K0xUXERwknUY9InsQxRRB1tpl8NSMQx9DOVJY598Hmz~ltjcBLDTGmgvAXl1E-5s~79k9fOo7~kW1RTh~5s10tJT-~6lNz4A__",
            gitlink: ``,
            live: `https://regal-panda-59f52e.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "CRAFT",
            img1: "https://media-hosting.imagekit.io//765da802cd0549ee/dbac9d78-1c05-49c5-8f67-c08b6acf30c9.jpg?Expires=1835960742&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fsEec7Y5vlR-x1E1Ezjw04qGiLAzIzqfTiJnY8SM~hu3X~NXqaYV5SAqgwDCI~SIVyT-MnmrfZ8aot7vPioywhaBurq83~1hWmdkkJbIVQEymm7D8GJa1OZnagymCz~4XVsvFXR1n~-WslkDqXyYDtm18TMW8CKLIwJT4gTyv7s3HjRwasht5g0zeNdva1JLD6WUjO5A2ogHZClJfl-Q3Ne2F~h8wI~nmzXLuI2tl4nZ1ZS3UjJekcyl54DyWnfakSysV-fuUmUUm4vttsvgcqdAKr0seaaUYg6aNbZ122x2fGmFb5zOIU7NJao1qAi5DqDptkOUGsS3Onix~bH6iQ__",
            gitlink: ``,
            live: `https://jazzy-daffodil-b5125e.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "BY FAITH",
            img1: "https://media-hosting.imagekit.io//f8cc844a3c3d4bee/f669140d-5e13-49d1-90fc-b1f7ef1b64de.jpg?Expires=1835960809&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a2K5viRde4lg7IZtH0Ra8QF~1dj3f8nnSNM6ZvTp9XMLLwN7QjpSjvGSOWuln04-LC~qT8qG9ad1wIL0EZ6kVR2uzcmH6rwxpeJz-8U68eLMSvb39QvrPvCv1BOamcUYLIusWrZhjXovkb20asTmBNs7gfp5QFgUjdgoJ6LrhH8tBUPSvyS3JQOYlpVNUwr5SrPJ8nzTViJXEBwZEqVwZNng1NKGIuzsoTqXnRym4BGiaK7LFxkGs07qjpTThfdLz27Y5t2Vwya2JbE8wjzDw~Ft8ZOpK19LanrH0~Hbw~-ZVP8V1BCCQG5YRjTwHskMWd6OyPRzWxpWXBTnQQE8rA__",
            gitlink: ``,
            live: `https://deft-klepon-af2c94.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "ACTION",
            img1: "https://media-hosting.imagekit.io//d69a28aef0c74cd0/b08c4fa6-2656-4c32-95c3-f2b387ca2e78.jpg?Expires=1835960867&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lPz3Fk4pPNFB4RftL60iriaM9FRVNWrKk3V-ykTkNTpTK3E2dUu-XpwvECgzxQ7ZfyUaP4EoltbxFyVwJGzWfMNk5aF3r43SAsF2vT957TWMqsWJmD-fy8UgPdp68ia4xvNS9rLdAj0jVGTrPtiGLL3NMfhGdtrOS7~n5SUsPfLen5eC1wS9zu0jDJH8rtJftjliex-1GkATrkX-enpd6muVM-NikPpG4ZXcpK8ulluJ3YC-lihVBRQqGgzB7Nt5SknDa0joIQDZccg6PSaBxQAvoFJSSkpv3ACdvBoG~o0zQmipHVHsbHGa9ItpiFtdw-vI9q114qxbIEcdRhAxOg__",
            gitlink: ``,
            live: `https://radiant-zabaione-c6b278.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "HAZZE",
            img1: "https://media-hosting.imagekit.io//05c9de4746134d18/59a8969d-fce9-4f01-a39d-d630fcafbaef.jpg?Expires=1835960912&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xk35QyUhV~thfPsfv9tLEiKMKRqf7KrSWzZgKVuO1fh8OF8RCHR~BPWO1ZRNZBqZ6NqbfLcBgVPRGNitJvKDKLFqQJourA2y0~7~-ozkoupEE3-6SHgvq1OLt2K0EosHBybwECetHRrVHATn9OvoCYy9v53whZDplXRX-y~th03sQO0WYB7FnMo3DKTsZuMlHmbamdi6~K1PLkbn3akhjbMEvLCMReRpI-KP~9zungc-an5e3NPgymX6-Bva62NTJED7G9q86qjWk21Fte9KUQDUUZi2FDHFYs78OuWfdtjTgVMVLhBTnPtx-4tJe891um2eERdDrURvAhszDz9VuQ__",
            gitlink: ``,
            live: `https://benevolent-entremet-4fe8e6.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "QUADKOM",
            img1: "https://media-hosting.imagekit.io//66108ae6e0a24fe9/cb53b08d-4de0-42e9-ac5f-be1fbd00be53.jpg?Expires=1835961636&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kdGypTTTrXvCR254JcGAw0lsVqkSo-PGXhy1xEpfDpL4562vTGNItGvH1e81LV3XWB4gqQPvguGA07CvdZl6ozM--rw8PIh8RnMSl7kd9TNXS2M13hqIYH0gAK9J5nx0YojvT0PsjWmrBuyL2wl7DE1k4zTe6tSsXEJhWcohNUDDhcR7p369vyMLWhuF-RCO-CsfhzX~z2EFj-yi9FzyPz1cf17jRq8uRJ9MPbckk~sJcSeLsbN4FFXdX~1Ngfp0w~nn4zTxontkfjRfqp1KY3MbxCDgF8S4Qdn~SEUl3IQcffHmbojchIPBvizb6Y8u~2byKnLEPZKg1tS1wdqw0g__",
            gitlink: ``,
            live: `https://eclectic-kelpie-49dff4.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "Staging",
            img1: "https://media-hosting.imagekit.io//ff4c32d68a75469c/f4d7250d-9c7b-46f4-b69b-d87fd64216e3.jpg?Expires=1835961784&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ycdMgLSWhAXmmTISg3S5yQ9-~DfLNBl4DcqJeGYWR-3Zvvkb5FgMxPrUUq9mKXHvGGf~6Uf3hjIe7s4zOiMBhGnYa39~IjmkAqfTRS~fp3mqI3TSf46XyInoqYzxt0qnGhxweSGaSxstrt8ByL2329Ztxj2ZvwucOQ8N~-RsdorU-0N8CdTK2aq4DtPjMLAHix5-tj-Ygk7PmxLzkCqXpHCwyiBBZc2C4VSkZkjWAjR7kX1379Fn9HMMcSRqPmFeqMwVlopkT2b1XIgswOkmwc~j~w8Qlu6Zsd~hGGSODWf2cKQ9rfzJ9APzBWaz0dm5jJnn5Y2SU5stjFWY4g9uNw__",
            gitlink: ``,
            live: `https://leafy-heliotrope-e16019.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "SAASLAND",
            img1: "https://media-hosting.imagekit.io//e7d2ca97a6e544d0/c4b2b7f2-303c-4004-8d58-39e71fb9b348.jpg?Expires=1835958779&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DHMNPnDfI1xWiYVJCiELu~qZTlEVfdxO1FwHqeps5yYFIbEQL2jt87Wz-GoEvkdkvXFqBLmHpA8--1rFTDAe-LRDmRxAC010Qn~hABctGPgj-~DWgX8HpNmxyMfP1pjUAJTSC4Zs357KJh8qsJsWwFCEn5BE-r2r25QrKODvP2rpYoqQhvZ0gyv1SLTvIUpwR6lJ0ZAjRPsPG6P6Hjbb~QgUDMYGh2wudPTpUpvJb1c7XfN94r40WJfTESTCPgKE2b2Ybu7pMZoeFBz4CNg8TFvnMXr4P12tk56UYUS65RLSK68eWzb~N4z3vmAhNas6ZEAPiCpwyg4WH-yWw3dLRg__",
            gitlink: ``,
            live: `https://elaborate-semolina-d52ba8.netlify.app/`,
            type: "webpage"
        },
        {
            title: "TRIPS",
            img1: "https://media-hosting.imagekit.io//7d4044792e5840c2/799b0f68-9313-406b-be14-3857bf3ec9eb.jpg?Expires=1835961836&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=D8qQ9BlwDhbRGxPVbdh8KnWCAqD1WA~kuPxpkKkIOC7sYr0urmvu0O4E39NEBBq8ha126H0mvjmym6FZP9oMrhhTs6FvWnNVVDlsBFbndF6EtW8RapAsmOolQlvEoDFLMJ3OpPRPZquhKBNq0IOdUZbSCyfGmrb0qH881QVWOMsCf5aGYbJ944T~suBaxgzAwn9x9L10QyGwgCSB7xJMeuQUTjWErZ0hzkz~~xweMaQW02K1MH-S6-v6z1lu6EDf~T5maKCf9gJtAH2WHuszsXQ5flcwVA-GFqFu14dVnkxhvsD9qpbc5S97E0gHN6vyix56bNw0nnLD373zXM6Gmw__",
            gitlink: ``,
            live: `https://friendly-elf-89c876.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "PORTO",
            img1: "https://media-hosting.imagekit.io//35478860b71040b8/ff078d5c-970f-428c-ae29-70ee3f14b668.jpg?Expires=1835961933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uaE7mrsMqDR9bLCXQYXNrc8tJUXivOO71QYEb0SQ3d8P3UrjT40fdzaYRHOK2SoFABcPQs7jXsZ1n36tUHKh2C1GGiMzreSySZFTLOKQ6x1-GziMfLDnCAWjzXKgD9mY7fT5y79BW9BSL3qJg-sZO6liPfcnjZmg6mpl4y1c-eJ8Iir6Dr1fALF2xpVbimZ0in22i3JpljdnRur6KSqzSu7j7Nx1~KmUcaktHZvzFWzk1~hSJpdg6UlNBvWC7snwNloy3YdenTySqb9Nj7v-tZZe7xc49ywlrLN3qBTbu0G5-HiHQ7BnqKXnWum9bS03Iyw2Y2xxC7ICMkUljDMDQA__",
            gitlink: ``,
            live: `https://eloquent-brioche-3b4874.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "NOSEi",
            img1: "https://media-hosting.imagekit.io//2ff40eb9789b4bd9/65c2029c-afc6-41ac-b94d-d6c940f9dbf6.jpg?Expires=1835962051&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tBp~3GM9wpAqSneOLSkzen2NBb8Mr61OkGm0eTdr~YXACzfxIFfsbmhJPr7u7dWw4QcQDe5i5ion4q~-z8acCsLP-PuhilruKVlINso5ZE12Exvbi6y0rt9iJf8K36yh9WPE87O00~pzIQQcqBVS4dNgbHWSy9BFmn3oQ4r1QPUlf~0joGBNyD3QUJpunKW40~JzeagfsL7OBTudDXwqBqSNe0O8aoMbYLWeJokbjJuWKrVBdgw-IpevHPSNHtinmXhwqYy6dNFJCRMCLfiRTER1LpOOwGCFdVKOB9WBnaInF9H8CLtvESDV59qpmxsFM1cFw~dewZWhl0B6bddWuw__",
            gitlink: ``,
            live: `https://cosmic-pony-cfcf00.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "CRAFTS",
            img1: "https://media-hosting.imagekit.io//ac487825fb3f4406/ca4b40ab-0e52-408b-a1c0-bc95fab5590c.jpg?Expires=1835962099&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rRe6FOhloJc6gJVozxz6ksJf5yWCb4P9pFc55Mgr93KWZ-tj58OWs241McixSpUrxzEnqJuCVbMfem4W0rTDUtuGeZT7Ngd1aM5GWlyB4R4xNflGepIsWCREzFb6QsvHT0gj1vNXVhoX-KAdM-Q8EKc0vQPd4Jk8R4zfRdexWpYs~ixDk6lnmTHkUt-Bhw2U-TUDCqmfh-Yr65y3YIBOiJrN5XRB6AZ1wjKrOEcCQSyHwY1gtjA67NMN11yevqgOkpPFewoWnOXR8AVohNyLwIn6kMF8FawdMByac5xhJBE69ujkc5NYn5gjqfldY4UumHB~7w-dfuYdFJ7PRdsUyw__",
            gitlink: ``,
            live: `https://chic-brigadeiros-4e0802.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "ECOHO",
            img1: "https://media-hosting.imagekit.io//27c8bfe8b3914015/dd71a5fa-9d28-4dd5-a24d-4fe65221e4f5.jpg?Expires=1835962141&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dmCEJ3oLM9IQ0hrdZdEiJRl5HN7jjt-Zp2832Xi~FKpgJZz6AgqKlx7T~HUrFNOUlT9spp3Fw3CwGILFfGXrkVsHBSicEdQoibnyhV1kupBFVefvvgW~mP4vuwfGQjSb9Rmb6eVP09v6nWYdUTQ9DxWv3x4SttRhljhHnpqqmZEPMMwk-Ua4uarYwN6Wj6cqxCdYK6qmQe8NRE~6ypQ0LFnHAgASaWR01zSspbLXVOS0UY8PNdKUQ3b0SAv2FXJNa4xQgWNCmQE2zMGbRl1rWVbj4st08v95DAebH7Ce~EE-hTLOWVgDP02VDryiagU~vvVJ7UJWHsufC7XGJeSujw__",
            gitlink: ``,
            live: `https://cosmic-swan-bd09a6.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "BELARA",
            img1: "https://media-hosting.imagekit.io//4a644ea35ec245ae/da546637-c161-4d6e-a450-a1db82c4f216.jpg?Expires=1835962190&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V7iQDBnyyRQHjZeCZIrH7ltJ9bKr9KiSwuRKwUQhGQYy4fNXsdeX1-67fcrwMg2Z7f8yHQWI-z0gSrlU0D9j1rS7N6qA16OI-pV6INlJppqnXk4f2IxzlxMpyukKKVsvWS7X~1KpDkPZ2hOieGuL89zGWUfYRW7cYfx6kFn32F~UskrEcOnDIQDn5oVPvWsU~y6KRR9Bg74IAr0eCxiCmWsu3bsUTNMDSTbY9LOKSGQk1pplFYEM82ZEujUIXWKBXjayckfP9Xz75VLV9CL8mtsPN5Z0SpClohnJY6sTmwxS~nkawmzKXqb17ikboyMLMXc7dOsG4q-1OpjBJ2fWQQ__",
            gitlink: ``,
            live: `https://shimmering-druid-1c6179.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "ADIDAS1",
            img1: "https://media-hosting.imagekit.io//cee7420e002a47e7/342de7a1-4c83-4325-9d95-cac698e1b011.jpg?Expires=1835962234&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W01h~1oxx1lIoOeD5iy0h3Va52HDHq-sivSoJ8rMfqWkI03d65J9knqSroyrNa6gW6Z~zjjuHa8oriYu8RWCl7a26GEqRzz8BpJfOxTJEIUYTydlyAZvMuBKM6RgOmwyJaaC-Ok0xTGoG5GGXqjxIqzMP4eVn6qQQy6R-gMmZDbEZKHF0tWT1wEyi2hGANnOyR-DZlKA9fcyIHdq3gLTBSTWRU5lcnGBxF8RR8ggBvT3pqBzLPVAnTdUWunRfL~h99bd3Pb7uD~K5x9gtF7IWg0eXepxYuhLcjrnmKlFKsk~CIyVqcCOeK7JvBG6nsf3eOnsMK-Ons1HlQL6cnj~BA__",
            gitlink: ``,
            live: `https://rad-cajeta-c18203.netlify.app/`, 
            type: "webpage"
        },
        {
            title: "ADIDAS",
            img1: "https://media-hosting.imagekit.io//cee7420e002a47e7/342de7a1-4c83-4325-9d95-cac698e1b011.jpg?Expires=1835962234&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W01h~1oxx1lIoOeD5iy0h3Va52HDHq-sivSoJ8rMfqWkI03d65J9knqSroyrNa6gW6Z~zjjuHa8oriYu8RWCl7a26GEqRzz8BpJfOxTJEIUYTydlyAZvMuBKM6RgOmwyJaaC-Ok0xTGoG5GGXqjxIqzMP4eVn6qQQy6R-gMmZDbEZKHF0tWT1wEyi2hGANnOyR-DZlKA9fcyIHdq3gLTBSTWRU5lcnGBxF8RR8ggBvT3pqBzLPVAnTdUWunRfL~h99bd3Pb7uD~K5x9gtF7IWg0eXepxYuhLcjrnmKlFKsk~CIyVqcCOeK7JvBG6nsf3eOnsMK-Ons1HlQL6cnj~BA__",
            gitlink: ``,
            live: `https://rad-cajeta-c18203.netlify.app/`, 
            type: "Other"
        }


    ])

    const [filteredData, setFilteredData] = useState(state);

    const filterData = (type) => {
        if (type === "all") {
            setFilteredData(state);
        } else {
            const filtered = state.filter((item) => item.type === type);
            setFilteredData(filtered);
        }
    }


    return (
        <div>


            {/* <Header/> */}
            <div id="titlemain" className='wow animate__animated animate__backInDown h-[auto] p-5 shadow-sm rounded-lg m-5'>
           { /*     <h3 className='font-bold text-2xl mb-2'>My Development Journey</h3>
                <li className='text-[#B7B7B7] text-sm'>50+ Web Pages: Designed and developed responsive web pages.</li>
                <li className='text-[#B7B7B7] text-sm'>5+ Websites: Built fully functional, dynamic websites.</li>
                <li className='text-[#B7B7B7] text-sm'>Other Projects: Worked on interactive apps, responsive designs, and API integrations.</li>
                */}
            </div>
            <div className='xl:w-[60%] flex justify-around items-center m-auto  mt-[50px]'>
                <button className=' text-[white]   bg-gradient-to-r from-sky-500 to-indigo-500  p-2 w-[120px] rounded-md' onClick={() => filterData("all")}>All</button>
                <button className=' text-[white]   bg-gradient-to-r from-sky-500 to-indigo-500  p-2 w-[120px] rounded-md' onClick={() => filterData("website")}>Website</button>
                <button className=' text-[white]   bg-gradient-to-r from-sky-500 to-indigo-500  p-2 w-[120px] rounded-md' onClick={() => filterData("Adminpanel")}>Admin Panel</button>
                <button className=' text-[white]   bg-gradient-to-r from-sky-500 to-indigo-500  p-2 w-[120px] rounded-md ' onClick={() => filterData("webpage")}>Webpages</button>
                <button className=' text-[white]   bg-gradient-to-r from-sky-500 to-indigo-500  p-2 w-[120px] rounded-md' onClick={() => filterData("Other")}>Other</button>
            </div>
            <h1 className="text-[white] text-center mt-[10px]  text-[30px]" > Total {filteredData[0].type} Is  {filteredData.length}  </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[85%] m-auto my-0  pt-[80px] h-[auto]  border-[white]'>
            
                {filteredData.map((el) => {
                    console.log(el);
                    return <div key={el.title} id='alldata' className=' text-[white]  border border-[#111827]  shadow-md  hover:shadow-[#5471F0] rounded-lg p-3'>
                           <a href={el.live}  target="_blank" >
                        <img src={el.img1} alt="dsad" className="rounded-lg   cursor-pointer " />
                        </a>
                        <h3 className='mt-2 mb-[10px] '>{el.title}</h3>
                        <a href={el.gitlink} className=''  target="_blank"  >
                            <button id="btd"  className='col-span-4 me-[8px] rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[120px]'     >
                                {/* <i class="fa-brands fa-sourcetree text-[White]"></i>  */}
                                <i class="fa-solid fa-code me-[8px] text-[White] "></i>
                                View Code</button></a>
                        <a href={el.live}  target="_blank" >
                            <button  id="btd" className='col-span-4 ms-[20px] rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'  >
                                
                                {/* <i class="fa-solid fa-life-ring text-[White]"></i>  */}
                                <i class="fa-brands fa-chrome text-[White]   me-[10px]"></i>
                                
                                Live</button></a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project_Page