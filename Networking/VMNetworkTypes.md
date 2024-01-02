# Network types

In the context of virtual machines (VMs), various types of networks are available to facilitate communication and connectivity. The specific options may vary depending on the virtualization platform or cloud service provider you are using. Here are some common types of networks for virtual machines:

- **Internal Network / Private Network**:

    Description: An isolated network where VMs can communicate with each other but are not directly accessible from outside the network.

    Use Case: Internal communication between VMs within the same network.

- **External Network / Public Network**:

    Description: A network that allows VMs to communicate with external resources, such as the internet or other networks.
    
    Use Case: VMs requiring internet access or communication with external services.

- **Host-Only Network**:

    Description: A network that enables communication between VMs and the host machine but doesn't allow external access.

    Use Case: Development or testing environments where VMs need to communicate with the host system.

- **Bridged Network**:

    Description: Connects the VM directly to the physical network, making the VM appear as a separate device on the same network as the host.

    Use Case: VMs that need to be part of the same network as the host and other devices.

- **NAT (Network Address Translation) Network**:

    Description: VMs share a common IP address, and network traffic is translated between the internal VMs and external networks.

    Use Case: Multiple VMs with private IP addresses sharing a single external IP address.

- **Overlay Networks (Software-Defined Networking)**:

    Description: Virtual networks created on top of the physical network, allowing more flexible and dynamic configuration.

    Use Case: Cloud environments, container orchestration systems, or environments requiring network virtualization.

- **VPN (Virtual Private Network) Connections**:

    Description: Securely connects VMs over the internet or other networks using encrypted tunnels.

    Use Case: Establishing secure connections between VMs in different locations or environments.

- **SDN (Software-Defined Networking) Networks**:

    Description: Networks that can be dynamically configured and managed through software, providing flexibility and automation.

    Use Case: Cloud environments and data centers where dynamic network changes are required.

<br><br>
These network types provide different levels of isolation, security, and connectivity options for virtual machines, allowing you to choose the configuration that best suits your specific use case and requirements.