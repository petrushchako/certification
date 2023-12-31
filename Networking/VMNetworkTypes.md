# Network types

In the context of virtual machines (VMs), various types of networks are available to facilitate communication and connectivity. The specific options may vary depending on the virtualization platform or cloud service provider you are using. Here are some common types of networks for virtual machines:
<br><br>

- **Internal Network / Private Network**:

    **Description**: An isolated network where VMs can communicate with each other but are not directly accessible from outside the network.

    **Use Case**: Internal communication between VMs within the same network.
<br><br>

- **External Network / Public Network**:

    **Description**: A network that allows VMs to communicate with external resources, such as the internet or other networks.
    
    **Use case**: VMs requiring internet access or communication with external services.
<br><br>

- **Host-Only Network**:

    **Description**: A network that enables communication between VMs and the host machine but doesn't allow external access.

    **Use case**: Development or testing environments where VMs need to communicate with the host system.
<br><br>

- **Bridged Network**:

    **Description**: Connects the VM directly to the physical network, making the VM appear as a separate device on the same network as the host.

    **Use case**: VMs that need to be part of the same network as the host and other devices.
<br><br>

- **NAT (Network Address Translation) Network**:

    **Description**: VMs share a common IP address, and network traffic is translated between the internal VMs and external networks.

    **Use case**: Multiple VMs with private IP addresses sharing a single external IP address.
<br><br>

- **Overlay Networks (Software-Defined Networking)**:

    **Description**: Virtual networks created on top of the physical network, allowing more flexible and dynamic configuration.

    **Use case**: Cloud environments, container orchestration systems, or environments requiring network virtualization.
<br><br>

- **VPN (Virtual Private Network) Connections**:

    **Description**: Securely connects VMs over the internet or other networks using encrypted tunnels.

    **Use case**: Establishing secure connections between VMs in different locations or environments.
<br><br>

- **SDN (Software-Defined Networking) Networks**:

    **Description**: Networks that can be dynamically configured and managed through software, providing flexibility and automation.

    **Use case**: Cloud environments and data centers where dynamic network changes are required.

<br><br>
These network types provide different levels of isolation, security, and connectivity options for virtual machines, allowing you to choose the configuration that best suits your specific use case and requirements.