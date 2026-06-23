import { useEffect, useState } from "react";

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
function NotificationBell() {

    const [notifications,
        setNotifications] =
        useState([]);

    useEffect(() => {

    const client =
        new Client({

            webSocketFactory: () =>
                new SockJS(
                    "https://nexushr-backend-1.onrender.com/ws"
                ),

            reconnectDelay: 5000,

            onConnect: () => {

                client.subscribe(
                    "/topic/notifications",

                    (message) => {

                        setNotifications(
                            prev => [
                                ...prev,
                                message.body
                            ]
                        );
                    }
                );
            }
        });

    client.activate();

    return () => {

        client.deactivate();
    };

}, []);

    return (

        <div>

            🔔
            {
                notifications.length
            }

            <ul>

                {
                    notifications.map(
                        (n, i) => (

                            <li key={i}>
                                {n}
                            </li>
                        )
                    )
                }

            </ul>

        </div>
    );
}

export default NotificationBell;