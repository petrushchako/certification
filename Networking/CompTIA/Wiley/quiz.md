# CompTIA exam questions

## Easy (134)

1. Which mechanism is used by TCP to set up and synchronize a new TCP/IP connection?
    > **Three-way handshake**
2. A network engineer must ensure communications between an organization's branch offices and main HQ cannot be eavesdropped on. What should the engineer do?
    > **Configure site-to-site VPN between locations.**
3. A company is installing a large rack-mounted infrastructure to support a web server farm. High-availability is a critical concern for the company. You need to recommend a solution that will ensure continued availability without interruption if AC line power is lost. What type of technology does the company need to ensure this?
    > **UPS**
4. PC1 is unable to access the Internet in the network shown in the exhibit. What is the MOST likely cause? <br> ![](img/quiz-1.jpg)
    > **A rogue DHCP server**
5. A policy includes the following statement:<br>"Employees are not allowed to use company equipment to copy or distribute copyrighted material without the written permission of the holder of the copyright."<br>Which policy would this statement be part of?
    > **AUP**
    >
    > - The statement would be part of the company's acceptable use policy (AUP). The AUP defines how company equipment and data may and may not be used. It typically includes detailed security guidelines and references to other policies, such as password policy requirements.
    > - This would not be part of a non-disclosure agreement (NDA). An NDA is a confidentiality agreement. It is a legally binding contract between two or more entities, such as between a company and an employee, designed to protect proprietary information and trade secrets. It does not address data or activity outside of the scope of the contract principals.
    > - This would not be part of a service level agreement (SLA). An SLA defines levels of service provided by a customer to its customers. For example, an SLA could define items such as performance metrics and guaranteed availability.
    > - This would not be part of a bring your own device (BYOD) policy. If personal devices are authorized through a BYOD policy, their acceptable use would be outlined in the AUP. The specific content of a BYOD varies by organization depending on its needs, security concerns, and network support for devices. Where possible, policies are typically enforced through network configurations and settings.
6. Match the network requirements to the network devices. Drag the appropriate device to each requirement. A device may be used once, more than once, or not at all:
    - A company needs a device to help centralize authentication, mitigate radio interference, provide load balancing, and improve bandwidth usage.
    - A company needs to evenly distribute traffic between web servers deployed in its perimeter network.
    - A company needs to add a layer of protection between internal network hosts and external websites.
    > - A wireless controller (or wireless LAN controller) can centralize authentication by forwarding requests to an authentication server, mitigate radio interference, provide load balancing, and improve bandwidth usage. It also provides for failover. Many versions can display a visualized map of the wireless network. Most include enhanced security features, such as detecting rogue access points and preventing some types of attacks.
    > - A load balancer can evenly distribute traffic between web servers deployed in the perimeter network. A load balancer is a device that is designed to distribute network or application traffic between multiple servers, decreasing the burden on any individual server. Distribution can be simply sent to each server in turn, based on the current number of connections to a server, or based on the current processing load on a server.
    > - A proxy server adds a layer of protection between internal network hosts and external websites. The proxy server uses its own address instead of the internal host's when connecting to an external site and returns the result to the originally requesting host. Most web proxy servers will also cache the result and serve subsequent requests from the cache instead of issuing a new request to the external server.
    > - A Remote Authentication Dial-In User Service (RADIUS) server does not match any of the scenarios. A RADIUS server provides a central point for managing authentication, authorization, and accounting (AAA).
    > - A content filter does not match any of the scenarios. A content filter can be software installed on a computer or a combination of software and a filtering device. A content filter is most commonly used to block objectionable content from websites or email. It may be used to block outgoing access to inappropriate or potentially hazardous websites. The use of content filters has expanded on wireless networks as more companies have introduced bring-your-own-device (BYOD) policies.
    > - A VPN concentrator does not match any of the scenarios. A VPN concentrator is a device that can access and manage multiple secure VPN tunnel connections.
7. A company wants to connect a remote office using a satellite internet service. What should be the main concern for this deployment?
    > **Latency**
8. A restaurant offers public Wi-Fi access to the Internet for its customers. A customer is prompted with a web page that requires the customer to agree to abide by use policies while connected. What is this an example of?
    > **Captive portal**
    >
    > - This is an example of using a **captive portal** as an access control. A captive portal displays a web page when a connection is made and can prompt for agreement to policies, as in this example. The portal can also request additional authentication credentials, require registration, request payment, or take other actions. The page can also be informational only, providing use guidelines but not requiring agreement.
    > - This is not an example of **network access control (NAC)** NAC uses policies and protocols to ensure t a device meets minimum qualifications before allowing it access to a network. This can include items such as up-to-date patches, current virus definitions, operating system versions, and so forth.
    > - This is not an example of **multifactor authentication**. For an authentication scheme to be multifactor authentication, it must include at least two DIFFERENT factors from the following:
    >   - Something you know
    >   - Something you have
    >   - Something you are
    >   - Somewhere you are
    >   - Something you do
    > - This is not an example of **media access control (MAC) address filtering**, though MAC address filtering can be integrated with captive portal. MAC address filtering would not be practical in this scenario because there is no way to know in advance the MAC address of customer devices.
9. A company has its own comms rooms and an on-premises data center containing all its servers and network devices. A network engineer wants to add some cloud on-demand solutions to the existing infrastructure. Which cloud model should the company use?
    > **Hybrid**
10. A company wants to configure a site-to-site VPN link between two offices. Users in each office should have access to resources in the other office, including shared folders and network services. What type of VPN should the company use?
    > **IPSec VPN**<br>The company should use an IPSec VPN. An IPSec VPN can be used for remote client connections and to create site-to-site VPN connections. An IPSec VPN creates a full WAN link between the sites, with the ability to access resources from either end of the connection. Resource access is limited based on permissions, not on technology support.
    > - The company should not use an SSL VPN or TLS VPN. In common usage, the term SSL VPN is used to describe both types of VPN connections. This type of VPN supports a connection over port 443, making easy to implement for most network firewalls. This is the same port used for HTTPS connections. A significant limit is that access is limited to websites, web applications, and web-aware applications rather than providing support for full site-to-site connections.
    > - PPTP is an older remote access protocol and is no longer in common use. It can be used to create a VPN link, but this is not recommended, especially because of potential security issues.
11. 